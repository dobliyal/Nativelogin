import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Redux/slices/userSlice';
import imageReducer from '../Redux/slices/imageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;