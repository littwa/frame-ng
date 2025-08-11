import { combineReducers, createReducer, on } from '@ngrx/store';
import * as regard from 'src/app/store/regard/regard.actions';

export const regardListReducers = createReducer(
  null,
  on(regard.getRegardListsSuccess, (s, a) => a.payload),
  on(regard.addRegardListSuccess, (s, a) => [...s, a.payload]),
  on(regard.getRegardListsReset, () => null),
);

export const operativeRegardReducers = createReducer(
  null,
  on(regard.getRegardSuccess, (s, a) => a.payload),
  on(regard.addRegardTextSuccess, (s, a) => a.payload),
  on(regard.updateRegardTextSuccess, (s, a) => ({ ...s, list: s.list.map(v => (v._id === a.payload._id ? a.payload : v)) })),
  on(regard.delTextFromRegardSuccess, (s, a) => a.payload),
  on(regard.getRegardReset, () => null),
);

export const qualifyReducers = createReducer(null);

export const regardReducers = combineReducers({
  list: regardListReducers,
  qualify: qualifyReducers,
  operative: operativeRegardReducers,
});
