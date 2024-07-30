import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../Navigation/Navigation';

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export interface LoginFormData {
  username: string;
  password: string;
}
