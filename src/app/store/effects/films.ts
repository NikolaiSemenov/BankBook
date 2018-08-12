import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';

import * as FilmsActions from '../actions/films';

@Injectable()
export class FilmsEffects {
  @Effect()
  detectedFilmsFetch = this.actions$
    .ofType(FilmsActions.FETCH_DETECTED_FILMS)
    .pipe(
      switchMap((action: FilmsActions.fetchDetectedFilms) => {
        const searchStr = action.payload;
        return this.httpClient.get(
          `https://api.themoviedb.org/3/search/movie?api_key=d21bcb7dea357713c767953eaf67a0b7&query=${searchStr}&page=1`
        );
      }),
      map(films => {
        return {
          type: FilmsActions.SET_DETECTED_FILMS,
          payload: films
        };
      })
    );
  @Effect()
  catalogFilmsFetch = this.actions$
    .ofType(FilmsActions.FETCH_CATALOG_FILMS)
    .pipe(
      switchMap((action: FilmsActions.fetchCatalogFilms) => {
        const page = action.payload;
        return this.httpClient.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d21bcb7dea357713c767953eaf67a0b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
      }),
      map(films => {
        return {
          type: FilmsActions.SET_CATALOG_FILMS,
          payload: films
        };
      })
    );
  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
