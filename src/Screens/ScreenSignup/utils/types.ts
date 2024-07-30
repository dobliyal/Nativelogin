import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../Navigation/Navigation';

export type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

export interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

export interface FormData {
  username: string;
  email: string;
  password: string;
}
