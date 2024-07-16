import { createSelector } from '@ngrx/store';
import { IStore } from '../../interfaces/store.interfaces';

export const getErrors = createSelector(
  (s: IStore) => s.error,
  s => s,
);
