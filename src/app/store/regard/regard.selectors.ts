import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IStore } from 'src/app/interfaces/store.interfaces';

export const selectRegards: MemoizedSelector<any, any> = createSelector(
  (s: IStore) => s.regard,
  s => s.list,
);

export const selectRegard: MemoizedSelector<any, any> = createSelector(
  (s: IStore) => s.regard,
  s => s.operative,
);

export const selectQualify: MemoizedSelector<any, any> = createSelector(
  (s: IStore) => s.regard,
  s => s.qualify,
);
