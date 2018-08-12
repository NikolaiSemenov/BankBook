import * as filmsActions from '../actions/films';
import * as fromRoot from './index';
import { Films } from '../../shared/models/films.model';
import { Film } from '../../shared/models/film.model';

export interface FeatureState extends fromRoot.State {
  films: State;
}

export interface State {
  searchFilms: Films;
  catalogFilms: Films;
  selectedFilm: Film;
}

const initialState: State = {
  searchFilms: null,
  catalogFilms: null,
  selectedFilm: null
};

export function filmsReducer(
  state = initialState,
  actions: filmsActions.filmsActions
) {
  switch (actions.type) {
    case filmsActions.SET_DETECTED_FILMS:
      return {
        ...state,
        searchFilms: { ...actions.payload }
      };
    case filmsActions.RESET_DETECTED_FILMS:
      return {
        ...state,
        searchFilms: null
      };
    case filmsActions.SET_SELECTED_FILM:
      return {
        ...state,
        selectedFilm: { ...actions.payload }
      };
    case filmsActions.SET_CATALOG_FILMS:
      let oldCatalogFilms;
      if (state.catalogFilms) {
        oldCatalogFilms = { ...state.catalogFilms };
        oldCatalogFilms.results = [
          ...oldCatalogFilms.results,
          ...actions.payload.results
        ];
      }
      const newCatalogFilms = oldCatalogFilms
        ? oldCatalogFilms
        : actions.payload;
      return {
        ...state,
        catalogFilms: { ...newCatalogFilms }
      };
    case filmsActions.RETRIVER_STATE:
      return {
        ...actions.payload
      };
    default:
      return state;
  }
}
