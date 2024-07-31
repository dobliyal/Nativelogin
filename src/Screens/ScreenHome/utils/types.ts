import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../../Navigation/types';

export type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export interface User {
  username: string;
  email: string;
  name: string;
}
export interface CardData {
    id: any;
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
  