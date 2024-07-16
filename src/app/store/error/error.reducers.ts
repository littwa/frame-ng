import { createReducer, on } from '@ngrx/store';
import * as ActionsError from './error.actions';

import * as ActionsAuth from 'src/app/store/auth/auth.actions';
export const errorReducer = createReducer(
  null,
  on(ActionsError.errorReset, () => null),
  on(ActionsError.generalError, (state, action) => action.payload),
  // on(ActionsPosts.postCreateError, (state, payload) => payload),
  // on(ActionsPosts.postGetByIdError, (state, payload) => payload),
  // on(ActionsPosts.postsGetError, (state, payload) => payload),
  // on(ActionsPosts.postUpdateError, (state, payload) => payload),
  // on(ActionsPosts.postDeleteError, (state, payload) => payload),
  // on(ActionsAuth.authSignUpUserError, (state, payload) => payload),
  // on(ActionsAuth.authSignOutUserError, (state, payload) => payload),
  // on(ActionsAuth.authSignInUserError, (state, payload) => payload),
  // on(ActionsAuth.authGetCurrentUserError, (state, payload) => payload),
  // on(ActionsAuth.authGetRefreshUserError, (state, payload) => payload),
  // on(ActionsAuth.authUpdateUserError, (state, payload) => payload),
  // on(ActionsUsers.getAllUsersError , (state, payload) => payload),
  // on(ActionsUsers.followUserError , (state, payload) => payload),
  // on(ActionsUsers.unfollowUserError , (state, payload) => payload),
  // on(ActionsUsers.getUserByIdError , (state, payload) => payload)
);
