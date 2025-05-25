import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IStateLoader } from '../../interfaces/common.interfaces';
import { IStore } from '../../interfaces/store.interfaces';

export const selectScreenshotsLists: MemoizedSelector<any, any, (s1: any) => any> = createSelector(
  (s: IStore) => s.screenshots,
  s => s.lists,
);
