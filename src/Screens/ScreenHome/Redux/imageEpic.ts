import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure, EpicActions } from './imageSlice';
import axios from 'axios';
const fetchImagesFromAPI = (query = 'yellow+flowers') => {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: '45184623-9eeaf5f50113a44caea62ef9a',
        q: query,
        image_type: 'photo',
        per_page: 10,
      },
    });
  };

export const imageEpic = (action$: Observable<EpicActions>) =>
     
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(fetchImagesFromAPI()).pipe(
        map(response => fetchImagesSuccess(response.data.hits)),
        catchError(error => of(fetchImagesFailure('Error fetching images.')))
      )
    )
  );
