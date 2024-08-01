import { combineEpics,Epic } from 'redux-observable';
import { authEpic } from './authEpic';
import { imageEpic } from '../../Screens/ScreenHome/Redux/imageEpic';

 const epics:Epic[] =[
  authEpic,
  imageEpic] as Epic[];
  
  export const rootEpic=combineEpics(...epics);
