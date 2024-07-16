import { createAction, props } from '@ngrx/store';
import { IPayload } from 'src/app/interfaces/common.interfaces';

export const ERROR_RESET = '[ERROR] Reset to null';
export const ERROR_GENERAL = '[ERROR] General set';
// export const POSTS_CREATE_SUCCESS = '[POSTS] Create Success';
// export const POSTS_CREATE_ERROR = '[POSTS] Create Error';

export const errorReset = createAction(ERROR_RESET, props<IPayload<any>>()); // props<IPayload<any>>()
export const generalError = createAction(ERROR_GENERAL, props<IPayload<any>>());
