import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User,UserState } from './types';


const initialState: UserState = {
  isLoggedIn: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.data = null;
    },
  },
});

export const { setUserData, setLoggedIn, logout } = userSlice.actions;
export default userSlice.reducer;
