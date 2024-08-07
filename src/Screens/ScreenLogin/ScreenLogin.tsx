import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../utils/Firebase';
import { LoginScreenProps, LoginFormData } from './utils/types';
import { loginSchema } from './utils/LoginValidation';
import { styles } from './ScreenLoginStyles';
import { mmkvStorage } from '../../utils/storage';

function ScreenLogin({ navigation }: LoginScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data.email, data.password, dispatch);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Error', 'Invalid login credentials');
    }
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
    </View>
  );
}

export default ScreenLogin;
