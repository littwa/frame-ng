import { combineReducers, createReducer, on } from '@ngrx/store';
import * as regard from 'src/app/store/regard/regard.actions';
import { screenshotsListReducer, screenshotsListsReducer } from 'src/app/store/screenshots/screenshots.reducers';

export const regardListReducers = createReducer(
  null,
  on(regard.getRegardListsSuccess, (s, a) => a.payload),
  on(regard.createRegardListSuccess, (s, a) => [...s, a.payload]),
);

export const qualifyReducers = createReducer(null);

export const regardReducers = combineReducers({
  list: regardListReducers,
  qualify: qualifyReducers,
});
