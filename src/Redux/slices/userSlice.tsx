import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types';

const initialState: UserState = {
  isLoggedIn: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User | null>) => {
      state.data = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.data = null;
    },
  },
});

export const { setUserData, setLoggedIn, logout,login } = userSlice.actions;
export default userSlice.reducer;
