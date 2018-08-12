import { Action } from '@ngrx/store';

import { Film } from '../../shared/models/film.model';
import { Films } from '../../shared/models/films.model';

export const FETCH_DETECTED_FILMS = '[Search] Fetch detected films';
export const SET_DETECTED_FILMS = '[Search] Set detected films';
export const RESET_DETECTED_FILMS = '[Search] Reset detected films';
export const SET_SELECTED_FILM = '[Search] Set selected film';
export const FETCH_CATALOG_FILMS = '[Film] Fetch catalog films';
export const SET_CATALOG_FILMS = '[Film] Set catalog films';
export const RETRIVER_STATE = '[App] Retriver state';

export class fetchDetectedFilms implements Action {
  readonly type = FETCH_DETECTED_FILMS;

  constructor(public payload: string) {}
}

export class setDetectedFilms implements Action {
  readonly type = SET_DETECTED_FILMS;

  constructor(public payload: Films) {}
}

export class resetDetectedFilms implements Action {
  readonly type = RESET_DETECTED_FILMS;
}

export class setSelectedFilm implements Action {
  readonly type = SET_SELECTED_FILM;

  constructor(public payload: Film) {}
}

export class fetchCatalogFilms implements Action {
  readonly type = FETCH_CATALOG_FILMS;

  constructor(public payload: number) {}
}

export class setCatalogFilms implements Action {
  readonly type = SET_CATALOG_FILMS;

  constructor(public payload: Films) {}
}

export class retriverState implements Action {
  readonly type = RETRIVER_STATE;

  constructor(public payload: {}) {}
}
export type filmsActions =
  | fetchDetectedFilms
  | setDetectedFilms
  | setSelectedFilm
  | fetchCatalogFilms
  | setCatalogFilms
  | resetDetectedFilms
  | retriverState;
