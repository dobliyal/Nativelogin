// src/Screens/ScreenSignup/utils/types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../Navigation/types';

export type SignupScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Signup'>;

export interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

export interface FormData {
  username: string;
  email: string;
  password: string;
}
