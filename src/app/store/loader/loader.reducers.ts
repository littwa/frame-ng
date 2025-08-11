import { ActionReducer, ActionReducerMap, combineReducers, createReducer, on } from '@ngrx/store';
// import * as ActionsPosts from 'src/app/store/posts/posts.actions';
import * as ActionsAuth from 'src/app/store/auth/auth.actions';
import * as ActionsLoader from 'src/app/store/loader/loader.actions';
import * as ActionsScreenshots from 'src/app/store/screenshots/screenshots.actions';
import * as ActionsRegards from 'src/app/store/regard/regard.actions';
import { IStateLoader } from 'src/app/interfaces/common.interfaces';
import { stopLoaderGeneralRequest } from 'src/app/store/loader/loader.actions';

export const generalLoaderReducers = createReducer(
  false,

  on(ActionsScreenshots.getScreenshotsListsRequest, () => true),
  on(ActionsScreenshots.createScreenshotsRequest, () => true),
  on(ActionsScreenshots.delScreenshotsListRequest, () => true),
  on(ActionsScreenshots.createScreenshotsListRequest, () => true),
  on(ActionsScreenshots.getScreenshotsListRequest, () => true),

  on(ActionsRegards.addRegardListRequest, () => true),
  on(ActionsRegards.getRegardListsRequest, () => true),
  on(ActionsRegards.getRegardRequest, () => true),
  on(ActionsRegards.addRegardTextRequest, () => true),
  on(ActionsRegards.updateRegardTextRequest, () => true),

  // on(JournalActions.addEntryRequest, () => true),
  // on(JournalActions.updateEntryRequest, () => true),
  // on(JournalActions.deleteEntryRequest, () => true),
  // on(JournalActions.getEntriesPerMonthRequest, () => true),

  // on(CodeActions.getCodeRequest, () => true),
  // on(CodeActions.createCodeRequest, () => true),
  // on(CodeActions.updateCodeRequest, () => true),
  // on(CodeActions.deleteCodeRequest, () => true),

  on(ActionsScreenshots.getScreenshotsListSuccess, () => false),
  on(ActionsScreenshots.createScreenshotsSuccess, () => false),
  on(ActionsScreenshots.delScreenshotsListSuccess, () => false),
  on(ActionsScreenshots.getScreenshotsListsSuccess, () => false),
  on(ActionsScreenshots.createScreenshotsListSuccess, () => false),
  on(ActionsScreenshots.getScreenshotsListError, () => false),
  on(ActionsScreenshots.createScreenshotsError, () => false),
  on(ActionsScreenshots.delScreenshotsListError, () => false),
  on(ActionsScreenshots.createScreenshotsListError, () => false),
  on(ActionsScreenshots.getScreenshotsListsError, () => false),
  on(ActionsScreenshots.getScreenshotsListReset, () => false),
  on(ActionsScreenshots.getScreenshotsListsReset, () => false),

  on(ActionsRegards.addRegardListSuccess, () => false),
  on(ActionsRegards.addRegardListError, () => false),
  on(ActionsRegards.getRegardListsSuccess, () => false),
  on(ActionsRegards.getRegardListsError, () => false),
  on(ActionsRegards.getRegardListsReset, () => false),
  on(ActionsRegards.getRegardSuccess, () => false),
  on(ActionsRegards.getRegardError, () => false),
  on(ActionsRegards.getRegardReset, () => false),
  on(ActionsRegards.addRegardTextSuccess, () => false),
  on(ActionsRegards.addRegardTextError, () => false),
  on(ActionsRegards.updateRegardTextSuccess, () => false),
  on(ActionsRegards.updateRegardTextError, () => false),

  on(stopLoaderGeneralRequest, () => false),
);

export const authLoaderReducer = createReducer(
  false,
  on(ActionsLoader.startLoaderAuthRequest, () => true),
  on(ActionsAuth.authSignUpUserRequest, () => true),
  on(ActionsAuth.authSignOutUserRequest, () => true),
  on(ActionsAuth.authSignInUserRequest, () => true),
  on(ActionsAuth.authGetCurrentUserRequest, () => true),
  on(ActionsAuth.authGetRefreshUserRequest, () => true),
  on(ActionsAuth.authUpdateUserRequest, () => true),
  on(ActionsLoader.stopLoaderAuthRequest, () => false),
  on(ActionsAuth.authSignUpUserSuccess, () => false),
  on(ActionsAuth.authSignUpUserError, () => false),
  on(ActionsAuth.authSignOutUserSuccess, () => false),
  on(ActionsAuth.authSignOutUserError, () => false),
  on(ActionsAuth.authSignInUserSuccess, () => false),
  on(ActionsAuth.authSignInUserError, () => false),
  on(ActionsAuth.authGetCurrentUserSuccess, () => false),
  on(ActionsAuth.authGetCurrentUserError, () => false),
  // on(ActionsAuth.authGetRefreshUserSuccess, () => false),
  on(ActionsAuth.authGetRefreshUserError, () => false),
  on(ActionsAuth.authUpdateUserSuccess, () => false),
  on(ActionsAuth.authUpdateUserError, () => false),
);

export const loadersReducers: ActionReducer<IStateLoader> = combineReducers({
  auth: authLoaderReducer,
  general: generalLoaderReducers,
});
