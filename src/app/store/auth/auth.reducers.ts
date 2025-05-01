import { ActionReducer, ActionReducerMap, combineReducers, createReducer, on } from '@ngrx/store';
import * as Actions from './auth.actions';
import { IStateAuth, IStateError, IStateToken, IStateUser } from '../../interfaces/auth.interfaces';
import { userPayloadPrepare } from 'src/app/utilities/reducer.utility';

export const INIT_STATE_USER: IStateUser = {
  isAuthenticated: false,
  email: '',
  role: '',
  localization: '',
  username: '',
  socialAuth: '',
  avatarURL: '',
  _id: '',
};

export const INIT_STATE_ERROR: IStateError = {
  error: null,
};

export const INIT_STATE_TOKEN: IStateToken = {
  accessToken: '',
  refreshToken: '',
};

export const userReducer = createReducer(
  INIT_STATE_USER,
  on(Actions.authSignUpUserSuccess, (state, { payload }) => ({
    ...state,
    email: payload.email,
    role: payload.role,
    username: payload.username,
  })),
  on(Actions.authSignInUserSuccess, (state, { payload }) => ({ ...state, ...userPayloadPrepare(payload) })),
  on(Actions.authGetCurrentUserSuccess, (state, { payload }) => ({ ...state, ...userPayloadPrepare(payload) })),
  on(Actions.authUpdateUserSuccess, (state, { payload }) => ({ ...state, ...userPayloadPrepare(payload) })),
  // on(Actions.authVerifyManagerSuccess, (state, action) => ({ ...state, isAuthenticated: true, email: action.payload.email, role: action.payload.role })),
  // on(Actions.authLogInManagerError, (state, action) => INIT_STATE),
  // on(Actions.authVerifyManagerError, (state, action) => INIT_STATE),
  // on(Actions.authLogOutManagerError, (state, action) => INIT_STATE),
  on(Actions.authSignOutUserSuccess, (state, action) => INIT_STATE_USER),
);

export const errorReducer = createReducer(
  null,
  on(Actions.authSignUpUserError, (state, action) => action.payload),
  on(Actions.authSignOutUserError, (state, action) => action.payload),
  on(Actions.authSignInUserError, (state, action) => action.payload),
  on(Actions.authGetCurrentUserError, (state, action) => action.payload),
  on(Actions.authGetRefreshUserError, (state, action) => action.payload),
  on(Actions.authUpdateUserError, (state, action) => action.payload),
  on(Actions.authSignUpUserRequest, (state, action) => null),
  on(Actions.authSignOutUserRequest, (state, action) => null),
  on(Actions.authSignInUserRequest, (state, action) => null),
  on(Actions.authGetCurrentUserRequest, (state, action) => null),
  on(Actions.authGetRefreshUserRequest, (state, action) => null),
  on(Actions.authUpdateUserRequest, (state, action) => null),
  // on(Actions.authVerifyManagerError, (state, action) => ({ error: action.err })),
  // on(Actions.authLogOutManagerError, (state, action) => ({ error: action.err })),
  // on(Actions.authGetCurrentManagerError, (state, action) => ({ error: action.err })),
  // on(Actions.authSignInCustomerError, (state, action) => ({ error: action.err })),
  // on(Actions.authLogInManagerRequest, (state, action) => INIT_STATE_ERROR),
  // on(Actions.authVerifyManagerRequest, (state, action) => INIT_STATE_ERROR),
  // on(Actions.authGetCurrentManagerRequest, (state, action) => INIT_STATE_ERROR),
);

export const tokenReducer = createReducer(
  INIT_STATE_TOKEN,
  on(Actions.authSignInUserSuccess, (state, action: any) => ({
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
  })),
  on(Actions.authSignOutUserSuccess, (state, action) => INIT_STATE_TOKEN),
  on(Actions.authSignOutUserError, (state, action) => INIT_STATE_TOKEN),
  on(Actions.authGetRefreshUserSuccess, (state, action: any) => ({
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
  })),
  // on(Actions.authVerifyManagerSuccess, (state, action) => action.payload.tokens),
  // on(Actions.authSignInCustomerSuccess, (state, action) => action.payload.tokens),
  // on(Actions.authVerifyManagerError, (state, action) => INIT_STATE_TOKEN),
);

export const authReducers: ActionReducer<IStateAuth> = combineReducers({
  user: userReducer,
  tokens: tokenReducer,
  error: errorReducer,
});

// export const getAuthManager = (state: StateAuth): StateManger => state.manager;
// export const getIsAuth = (state: StateAuth): boolean | null => state.manager.isAuthenticated;
// export const getEmailManager = (state: StateAuth): boolean => state.manager.email;
// export const getAuthToken = (state: StateAuth): string => state.tokens;
// export const getAuthError = (state: StateAuth): any => state.error.error;
// export const getUserRole = (state: StateAuth): any => state.manager.role;
