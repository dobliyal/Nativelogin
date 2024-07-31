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
export interface CardData {
    pageURL: string;
    likes: number;
    tags: string;
    views: number;
    downloads: number;
  }
  
  export interface CardContainerProps {
    pageURL: string;
    likes: number;
    tags: string;
    views: number;
    downloads: number;
  }
  