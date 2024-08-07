import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../utils/Firebase';
import { SignupScreenProps, FormData } from './utils/types';
import { styles } from './ScreenSignStyle';
import { Signupschema } from './utils/SignupValidation';
import { setLoggedIn } from '../../Redux/slices/userSlice';

function ScreenSignup({ navigation }: SignupScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(Signupschema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    try {
        await signupUser(data, dispatch);
        // dispatch(setLoggedIn(true));
       navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Signup Error', 'Failed to sign up. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
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
      {errors.username && <Text style={styles.errorText}>Username is required.</Text>}
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
      {errors.email && <Text style={styles.errorText}>Valid email is required.</Text>}
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
      {errors.password && <Text style={styles.errorText}>Password must be at least 6 characters.</Text>}
      <View style={styles.button}>
        <Button title="Signup" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

export default ScreenSignup;
