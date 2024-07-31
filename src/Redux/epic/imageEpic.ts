import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import axios from 'axios';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from '../slices/imageSlice';

export const imageEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(
        axios.get('https://pixabay.com/api/', {
          params: {
            key: '45184623-9eeaf5f50113a44caea62ef9a&q',
            q: 'Gradient',
            image_type: 'photo',
            per_page: 20,
          },
        })
      ).pipe(
        map(response => fetchImagesSuccess(response.data.hits)),
        catchError(error => of(fetchImagesFailure('Error fetching images.')))
      )
    )
  );