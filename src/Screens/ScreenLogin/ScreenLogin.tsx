// import React, { useEffect } from 'react';
// import { View, Text, Button, TextInput, Alert } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../utils/Firebase';
// import { LoginScreenProps, LoginFormData } from './utils/types';
// import { loginSchema } from './utils/LoginValidation';
// import { styles } from './ScreenLoginStyles';
// import { mmkvStorage } from '../../utils/storage';
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import { loginWithGoogle } from '../../utils/Firebase';
// import auth from '@react-native-firebase/auth'; 
// import AsyncStorage from '@react-native-async-storage/async-storage';


// function ScreenLogin({ navigation }: LoginScreenProps) {
//   const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
//     resolver: yupResolver(loginSchema),
//   });
//   const dispatch = useDispatch();

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: '35750514093-nbk4cq70jonim0smq889lkd5ktbcorb0.apps.googleusercontent.com',
//     });
//   }, []);

//   const handleGoogleSignIn = async () => {
//     loginWithGoogle(dispatch);
//   };

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       await loginUser(data.email, data.password, dispatch);
//        //navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Login Error', 'Invalid login credentials');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <Controller
//         control={control}
//         name="email"
//         render={({ field: { onChange, value } }) => (
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//       />
//       {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
//       <Controller
//         control={control}
//         name="password"
//         render={({ field: { onChange, value } }) => (
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//       />
//       {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
//       <View style={styles.button}>
//         <Button title="Login" onPress={handleSubmit(onSubmit)} />
//       </View>
//       <GoogleSigninButton
//        // style={styles.googleButton}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={handleGoogleSignIn}
//       />
//     </View>
//   );
// }

// export default ScreenLogin;




import React from 'react';
import { View, Text, Button, TextInput, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { loginUser } from '../../utils/Firebase';
import { LoginScreenProps, LoginFormData } from './utils/types';
import { loginSchema } from './utils/LoginValidation';
import { styles } from './ScreenLoginStyles';
import { loginWithGoogle } from '../../utils/Firebase';

function ScreenLogin({ navigation }: LoginScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const webClientId = '35750514093-nbk4cq70jonim0smq889lkd5ktbcorb0.apps.googleusercontent.com'; 

  
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data.email, data.password, dispatch);
    //  navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Error', 'Invalid login credentials');
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userinfo", userInfo);
   //   navigation.navigate('Home');
    }
    catch{
      console.log("Error hai bhai");
    } 
  };
    const handleGoogleSignIn = async () => {
    loginWithGoogle(dispatch);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <View style={styles.button}>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
      <Pressable onPress={handleGoogleSignIn}>
        <Text style={{color: '#222222',fontWeight:'400',fontSize:18}}>Login with Google</Text>
      </Pressable>
    </View>
  );
}

export default ScreenLogin;
