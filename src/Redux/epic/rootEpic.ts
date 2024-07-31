import { combineEpics } from 'redux-observable';
import { authEpic } from './authEpic';
import { imageEpic } from './imageEpic';

export const rootEpic = combineEpics(
  authEpic,
  imageEpic
);