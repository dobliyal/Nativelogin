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
    name: string;
    description: string;
   // img: string;
    price: string;
    rate:number;
    ratecount:string;
  }
  export interface CardContainerProps {
    name: string;
    description: string;
   // img: any;
    price: string;
    rate: number;
    ratecount: string;
  }