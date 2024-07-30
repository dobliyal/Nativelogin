import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../Navigation/Navigation';

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export interface User {
  username: string;
  email: string;
  name: string;
}
