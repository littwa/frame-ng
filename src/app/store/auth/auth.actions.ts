import { createAction, props } from '@ngrx/store';
import { IAuthSignInRequest, IAuthSignUpRequest, IPayload } from '../../interfaces/auth.interfaces';

// export const AUTH_LOG_IN_MANAGER_REQUEST = '[AUTH] Log-in manager Request'
// export const AUTH_LOG_IN_MANAGER_SUCCESS = '[AUTH] Log-in manager Success'
// export const AUTH_LOG_IN_MANAGER_ERROR = '[AUTH] Log-in manager Error'
// export const AUTH_VERIFY_MANAGER_REQUEST = '[AUTH] Verify manager Request'
// export const AUTH_VERIFY_MANAGER_SUCCESS = '[AUTH] Verify manager Success'
// export const AUTH_VERIFY_MANAGER_ERROR = '[AUTH] Verify manager Error'
// export const AUTH_VERIFY_CUSTOMER_REQUEST = '[AUTH] Verify customer Request'
// export const AUTH_VERIFY_CUSTOMER_SUCCESS = '[AUTH] Verify customer Success'
// export const AUTH_VERIFY_CUSTOMER_ERROR = '[AUTH] Verify customer Error'
// export const AUTH_LOG_OUT_MANAGER_REQUEST = '[AUTH] Log-out manager Request'
// export const AUTH_LOG_OUT_MANAGER_SUCCESS = '[AUTH] Log-out manager Success'
// export const AUTH_LOG_OUT_MANAGER_ERROR = '[AUTH] Log-out manager Error'

export const AUTH_SIGN_UP_USER_REQUEST = '[AUTH] Sign-up user Request';
export const AUTH_SIGN_UP_USER_SUCCESS = '[AUTH] Sign-up user Success';
export const AUTH_SIGN_UP_USER_ERROR = '[AUTH] Sign-up user Error';

export const AUTH_SIGN_IN_USER_REQUEST = '[AUTH] Sign-in user Request';
export const AUTH_SIGN_IN_USER_SUCCESS = '[AUTH] Sign-in user Success';
export const AUTH_SIGN_IN_USER_ERROR = '[AUTH] Sign-in user Error';

export const AUTH_SIGN_OUT_USER_REQUEST = '[AUTH] Sign-out user Request';
export const AUTH_SIGN_OUT_USER_SUCCESS = '[AUTH] Sign-out user Success';
export const AUTH_SIGN_OUT_USER_ERROR = '[AUTH] Sign-out user Error';

export const AUTH_GET_CURRENT_USER_REQUEST = '[AUTH] Get-current user Request';
export const AUTH_GET_CURRENT_USER_SUCCESS = '[AUTH] Get-current user Success';
export const AUTH_GET_CURRENT_USER_ERROR = '[AUTH] Get-current user Error';

export const AUTH_GET_REFRESH_USER_REQUEST = '[AUTH] Get-refresh tokens user Request';
export const AUTH_GET_REFRESH_USER_SUCCESS = '[AUTH] Get-refresh tokens user Success';
export const AUTH_GET_REFRESH_USER_ERROR = '[AUTH] Get-refresh tokens user Error';

export const AUTH_UPDATE_USER_REQUEST = '[AUTH] Update user Request';
export const AUTH_UPDATE_USER_SUCCESS = '[AUTH] Update user Success';
export const AUTH_UPDATE_USER_ERROR = '[AUTH] Update user Error';

export const authSignUpUserRequest = createAction(AUTH_SIGN_UP_USER_REQUEST, props<IPayload<IAuthSignUpRequest>>());
export const authSignUpUserSuccess = createAction(AUTH_SIGN_UP_USER_SUCCESS, props<IPayload<any>>());
export const authSignUpUserError = createAction(AUTH_SIGN_UP_USER_ERROR, props<IPayload<any>>());

export const authSignOutUserRequest = createAction(AUTH_SIGN_OUT_USER_REQUEST);
export const authSignOutUserSuccess = createAction(AUTH_SIGN_OUT_USER_SUCCESS);
export const authSignOutUserError = createAction(AUTH_SIGN_OUT_USER_ERROR, props<IPayload<any>>());

export const authSignInUserRequest = createAction(AUTH_SIGN_IN_USER_REQUEST, props<IPayload<IAuthSignInRequest>>());
export const authSignInUserSuccess = createAction(AUTH_SIGN_IN_USER_SUCCESS, props<IPayload<any>>());
export const authSignInUserError = createAction(AUTH_SIGN_IN_USER_ERROR, props<IPayload<any>>());

export const authGetCurrentUserRequest = createAction(AUTH_GET_CURRENT_USER_REQUEST);
export const authGetCurrentUserSuccess = createAction(AUTH_GET_CURRENT_USER_SUCCESS, props<IPayload<any>>());
export const authGetCurrentUserError = createAction(AUTH_GET_CURRENT_USER_ERROR, props<IPayload<any>>());

export const authGetRefreshUserRequest = createAction(AUTH_GET_REFRESH_USER_REQUEST);
export const authGetRefreshUserSuccess = createAction(AUTH_GET_REFRESH_USER_SUCCESS, props<IPayload<any>>());
export const authGetRefreshUserError = createAction(AUTH_GET_REFRESH_USER_ERROR, props<IPayload<any>>());

export const authUpdateUserRequest = createAction(AUTH_UPDATE_USER_REQUEST, props<IPayload<any>>());
export const authUpdateUserSuccess = createAction(AUTH_UPDATE_USER_SUCCESS, props<IPayload<any>>());
export const authUpdateUserError = createAction(AUTH_UPDATE_USER_ERROR, props<IPayload<any>>());

// export const authSignInCustomerRequest = createAction(AUTH_SIGN_IN_CUSTOMER_REQUEST, props<{ email: any, role: string, customer?: string, password?: string }>());
// export const authSignInCustomerSuccess = createAction(AUTH_SIGN_IN_CUSTOMER_SUCCESS, props<{ payload: any }>());
// export const authSignInCustomerError = createAction(AUTH_SIGN_IN_CUSTOMER_ERROR, props<{ err: any }>());
//
// export const authVerifyManagerRequest = createAction(AUTH_VERIFY_MANAGER_REQUEST, props<{ payload: any }>());
// export const authVerifyManagerSuccess = createAction(AUTH_VERIFY_MANAGER_SUCCESS, props<{ payload: any }>());
// export const authVerifyManagerError = createAction(AUTH_VERIFY_MANAGER_ERROR, props<{ err: any }>());
//
// export const authVerifyCustomerRequest = createAction(AUTH_VERIFY_CUSTOMER_REQUEST, props<{ payload: any }>());
// export const authVerifyCustomerSuccess = createAction(AUTH_VERIFY_CUSTOMER_SUCCESS, props<{ payload: any }>());
// export const authVerifyCustomerError = createAction(AUTH_VERIFY_CUSTOMER_ERROR, props<{ err: any }>());

