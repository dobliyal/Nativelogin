import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../Navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SignupScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Signup'>;

export interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

export interface FormData {
  username: string;
  email: string;
  password: string;
}
