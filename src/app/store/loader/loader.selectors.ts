import { createSelector } from '@ngrx/store';
import { IStore } from '../../interfaces/store.interfaces';

export const selectGeneralLoader = createSelector(
  (s: IStore) => s.loader,
  s => s.general,
);

export const selectAuthLoader = createSelector(
  (s: IStore) => s.loader,
  s => s.auth,
);
// getLoader.projector();
