import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Redux/slices/userSlice';
import imageReducer from '../Screens/ScreenHome/Redux/imageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;