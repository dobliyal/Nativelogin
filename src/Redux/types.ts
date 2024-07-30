export interface User {
    username: string;
    email: string;
    password: string;
  }
  
 export interface UserState {
    isLoggedIn: boolean;
    data: User | null; 
  }