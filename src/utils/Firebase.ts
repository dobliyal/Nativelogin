import { AppDispatch } from '../Redux/store';
import auth from '@react-native-firebase/auth';
import { setUserData } from '../Redux/slices/userSlice';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormData } from '../Screens/ScreenSignup/utils/types';
import { LoginFormData } from '../Screens/ScreenLogin/utils/types';
import { User } from '../Redux/types';

export const signupUser = async (user: User, dispatch: AppDispatch) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(user.email, user.password);
      const idToken = await userCredential.user.getIdToken();
      const id=await auth().currentUser?.getIdToken();
      console.log(id);
      console.log("singup", idToken)
      await AsyncStorage.setItem('authToken', idToken);
      const newUser: User = {
        email: user.email,
        username: user.username,
        password: user.password,
      };
      dispatch(setUserData(newUser));
    } catch (error) {
      Alert.alert('Cannot sign up, please try again.');
    }
  };


export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const idToken = await userCredential.user?.getIdToken();
      console.log('login', idToken);
  
      if (idToken) {
        await AsyncStorage.setItem('authToken', idToken);
      }
  
      const currentUser = auth().currentUser;
      if (currentUser) {
        const user: User = {
          email: currentUser.email || email,
          username: currentUser.displayName || '', 
          password: password, 
        };
        dispatch(setUserData(user));
      }
    } catch (error) {
      dispatch(setUserData(null));
      Alert.alert('Error occurred, cannot log you in. Please check your credentials and try again.');
    }
  };


export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('authToken'); 
     dispatch(setUserData(null)); 
    console.log(setUserData);
  } catch (error) {
    handleAuthError(error);
  }
};

const handleAuthError = (error: unknown) => {
  if (error instanceof Error) {
    Alert.alert('Auth Error', error.message);
  } else {
    Alert.alert('Auth Error', 'An unknown error occurred');
  }
};
