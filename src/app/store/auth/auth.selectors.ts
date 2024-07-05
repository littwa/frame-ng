import { createSelector, Store } from '@ngrx/store';
import { IStore } from 'src/app/interfaces/store.interfaces';

// export const ev = (s) => s.evidence;
export const getTokens = createSelector(
  (s: IStore) => s.auth.tokens,
  s => s,
);
export const getUser = createSelector(
  (s: IStore) => s.auth.user,
  s => s,
);
export const isAuthenticated = createSelector(
  (s: IStore) => s.auth.user.isAuthenticated,
  s => s,
);
