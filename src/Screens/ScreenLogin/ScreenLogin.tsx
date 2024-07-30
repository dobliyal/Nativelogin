import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { storage } from '../../assets/storage';
import { setLoggedIn } from '../../Redux/userSlice';
import { LoginScreenProps, LoginFormData } from './utils/types';
import { loginSchema } from './utils/LoginValidation';
import { styles } from './ScreenLoginStyles';

function ScreenLogin({ navigation }: LoginScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormData) => {
    const storedUserString = storage.getString('user') || '{}';
    const storedUser = JSON.parse(storedUserString);
    if (storedUser && data.username === storedUser.username && data.password === storedUser.password) {
      dispatch(setLoggedIn(true));
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid login credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
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
    </View>
  );
}

export default ScreenLogin;
