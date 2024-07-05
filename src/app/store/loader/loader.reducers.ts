import { ActionReducerMap, createReducer, on } from '@ngrx/store';
// import * as ActionsPosts from 'src/app/store/posts/posts.actions';
import * as ActionsAuth from 'src/app/store/auth/auth.actions';
import * as ActionsLoader from 'src/app/store/loader/loader.actions';
// import * as ActionsUsers from 'src/app/store/users/users.actions';
// import * as ActionsWit from 'src/app/store/wit/wit.actions';
// import * as ActionsCompose from 'src/app/store/compose/compose.actions';
import { IStateLoader } from 'src/app/interfaces/common.interfaces';
import { stopLoaderGeneralRequest } from 'src/app/store/loader/loader.actions';
// import { JournalActions } from 'src/app/store/journal/journal.actions';
// import { CodeActions } from 'src/app/store/code/code.actions';

export const generalLoaderReducers = createReducer(
  false,

  on(stopLoaderGeneralRequest, () => false),

  // on(ActionsPosts.postCreateRequest, () => true),
  // on(ActionsPosts.postGetByIdRequest, () => true),
  // on(ActionsPosts.postsGetRequest, () => true),
  // on(ActionsPosts.postUpdateRequest, () => true),
  // on(ActionsPosts.postDeleteRequest, () => true),
  // on(ActionsUsers.getAllUsersRequest, () => true),
  //
  // on(ActionsWit.createWitListRequest, () => true),
  // on(ActionsWit.createWitPhraseAATListRequest, () => true),
  // on(ActionsWit.delWitPhrasePermanentlyRequest, () => true),
  // on(ActionsWit.delWitListPermanentlyRequest, () => true),
  // on(ActionsWit.getWitListsRequest, () => true),
  // on(ActionsWit.getWitListPhrasesRequest, () => true),
  // on(ActionsWit.updateWItPhraseRequest, () => true),
  //
  // on(ActionsCompose.addComposeListRequest, () => true),
  // on(ActionsCompose.delComposeListRequest, () => true),
  // on(ActionsCompose.addComposeRequest, () => true),
  // on(ActionsCompose.delComposeRequest, () => true),
  // on(ActionsCompose.updateComposeRequest, () => true),
  // on(ActionsCompose.getListsComposeRequest, () => true),
  // on(ActionsCompose.getListComposeRequest, () => true),
  //
  // on(JournalActions.addEntryRequest, () => true),
  // on(JournalActions.updateEntryRequest, () => true),
  // on(JournalActions.deleteEntryRequest, () => true),
  // on(JournalActions.getEntriesPerMonthRequest, () => true),
  //
  // on(CodeActions.getCodeRequest, () => true),
  // on(CodeActions.createCodeRequest, () => true),
  // on(CodeActions.updateCodeRequest, () => true),
  // on(CodeActions.deleteCodeRequest, () => true),
  //
  // on(ActionsPosts.postCreateSuccess, () => false),
  // on(ActionsPosts.postGetByIdSuccess, () => false),
  // on(ActionsPosts.postsGetMeSuccess, () => false),
  // on(ActionsPosts.postsGetFollowingSuccess, () => false),
  // on(ActionsPosts.postsGetFollowersSuccess, () => false),
  // on(ActionsPosts.postsGetAllSuccess, () => false),
  // on(ActionsPosts.postCreateError, () => false),
  // on(ActionsPosts.postGetByIdError, () => false),
  // on(ActionsPosts.postsGetError, () => false),
  // on(ActionsPosts.postUpdateSuccess, () => false),
  // on(ActionsPosts.postUpdateError, () => false),
  // on(ActionsPosts.postDeleteSuccess, () => false),
  // on(ActionsPosts.postDeleteError, () => false),
  // on(ActionsUsers.getAllUsersSuccess, () => false),
  // on(ActionsUsers.getAllUsersError, () => false),
  //
  // on(ActionsWit.createWitListSuccess, () => false),
  // on(ActionsWit.createWitListError, () => false),
  // on(ActionsWit.createWitPhraseAATListSuccess, () => false),
  // on(ActionsWit.createWitPhraseAATListError, () => false),
  // on(ActionsWit.delWitPhrasePermanentlySuccess, () => false),
  // on(ActionsWit.delWitPhrasePermanentlyError, () => false),
  // on(ActionsWit.delWitListPermanentlySuccess, () => false),
  // on(ActionsWit.delWitListPermanentlyError, () => false),
  // on(ActionsWit.getWitListsSuccess, () => false),
  // on(ActionsWit.getWitListsError, () => false),
  // on(ActionsWit.getWitListsReset, () => false),
  // on(ActionsWit.getWitListPhrasesSuccess, () => false),
  // on(ActionsWit.getWitListPhrasesError, () => false),
  // on(ActionsWit.getWitListPhrasesReset, () => false),
  // on(ActionsWit.updateWItPhraseSuccess, () => false),
  // on(ActionsWit.updateWItPhraseError, () => false),
  //
  // on(ActionsCompose.addComposeListSuccess, () => false),
  // on(ActionsCompose.addComposeListError, () => false),
  // on(ActionsCompose.delComposeListSuccess, () => false),
  // on(ActionsCompose.delComposeListError, () => false),
  // on(ActionsCompose.addComposeSuccess, () => false),
  // on(ActionsCompose.addComposeError, () => false),
  // on(ActionsCompose.delComposeSuccess, () => false),
  // on(ActionsCompose.delComposeError, () => false),
  // on(ActionsCompose.updateComposeSuccess, () => false),
  // on(ActionsCompose.updateComposeError, () => false),
  // on(ActionsCompose.getListsComposeSuccess, () => false),
  // on(ActionsCompose.getListsComposeError, () => false),
  // on(ActionsCompose.getListsComposeReset, () => false),
  // on(ActionsCompose.getListComposeSuccess, () => false),
  // on(ActionsCompose.getListComposeError, () => false),
  // on(ActionsCompose.getListComposeReset, () => false),
  //
  // on(JournalActions.addEntrySuccess, () => false),
  // on(JournalActions.addEntryError, () => false),
  // on(JournalActions.updateEntrySuccess, () => false),
  // on(JournalActions.updateEntryError, () => false),
  // on(JournalActions.deleteEntrySuccess, () => false),
  // on(JournalActions.deleteEntryError, () => false),
  // on(JournalActions.getEntriesPerMonthSuccess, () => false),
  // on(JournalActions.getEntriesPerMonthError, () => false),
  //
  // on(CodeActions.getCodeSuccess, () => false),
  // on(CodeActions.getCodeReset, () => false),
  // on(CodeActions.getCodeError, () => false),
  // on(CodeActions.createCodeSuccess, () => false),
  // on(CodeActions.createCodeError, () => false),
  // on(CodeActions.updateCodeSuccess, () => false),
  // on(CodeActions.updateCodeError, () => false),
  // on(CodeActions.deleteCodeSuccess, () => false),
  // on(CodeActions.deleteCodeError, () => false),
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

export const loadersReducers: ActionReducerMap<IStateLoader> | any = {
  auth: authLoaderReducer,
  general: generalLoaderReducers,
};
