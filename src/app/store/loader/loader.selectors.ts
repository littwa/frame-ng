import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IStore } from '../../interfaces/store.interfaces';
import { IStateLoader } from '../../interfaces/common.interfaces';

export const selectGeneralLoader = createSelector(
  (s: IStore) => s.loader,
  s => s.general,
);

export const selectAuthLoader: MemoizedSelector<any, any, (s1: IStateLoader) => any> = createSelector(
  (s: IStore) => s.loader,
  s => s.auth,
);
// getLoader.projector();
