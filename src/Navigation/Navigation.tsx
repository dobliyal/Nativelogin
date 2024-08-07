import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenSignup from '../Screens/ScreenSignup/ScreenSignup';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/rootReducer';
import { setLoggedIn } from '../Redux/slices/userSlice'; 
import { AuthStackParamList, AppStackParamList } from './types';
const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          dispatch(setLoggedIn(true)); 
        } else {
          dispatch(setLoggedIn(false)); 
        }
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  if (isLoading) {
    return null; 
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" component={ScreenHome} />
          <AppStack.Screen name="Login" component={ScreenLogin} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Signup">
          <AuthStack.Screen name="Signup" component={ScreenSignup} />
          <AuthStack.Screen name="Login" component={ScreenLogin} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigation;
