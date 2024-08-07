import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../Navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

export type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export interface LoginFormData {
  email: string;
  password: string;
}
