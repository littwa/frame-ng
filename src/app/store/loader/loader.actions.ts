import { createAction } from '@ngrx/store';

export const START_LOADER_AUTH_REQUEST = '[Loader Auth] Start';
export const STOP_LOADER_AUTH_REQUEST = '[Loader Auth] Stop';

export const START_LOADER_GENERAL_REQUEST = '[Loader General] Start';
export const STOP_LOADER_GENERAL_REQUEST = '[Loader General] Stop';

export const startLoaderAuthRequest = createAction(START_LOADER_AUTH_REQUEST);
export const stopLoaderAuthRequest = createAction(STOP_LOADER_AUTH_REQUEST);

export const startLoaderGeneralRequest = createAction(START_LOADER_GENERAL_REQUEST);
export const stopLoaderGeneralRequest = createAction(STOP_LOADER_GENERAL_REQUEST);
