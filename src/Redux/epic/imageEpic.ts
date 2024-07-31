import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure, EpicActions } from '../slices/imageSlice';
import { fetchImagesFromAPI } from '../api/imageApi';

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
