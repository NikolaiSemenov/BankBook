import { ActionReducerMap } from '@ngrx/store';

import * as fromFilms from './films';

export interface State {
  films: fromFilms.State;
}

export const reducers: ActionReducerMap<State> = {
  films: fromFilms.filmsReducer
};
