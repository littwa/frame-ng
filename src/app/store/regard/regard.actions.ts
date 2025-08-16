import { createAction, props } from '@ngrx/store';
import { IPayload } from 'src/app/interfaces/auth.interfaces';

export const addRegardListRequest = createAction('[REGARD] addRegardListRequest', props<IPayload<any>>());
export const addRegardListSuccess = createAction('[REGARD] addRegardListSuccess', props<IPayload<any>>());
export const addRegardListError = createAction('[REGARD] addRegardListError', props<IPayload<any>>());

export const getRegardListsRequest = createAction('[REGARD] getRegardListsRequest');
export const getRegardListsSuccess = createAction('[REGARD] getRegardListsSuccess', props<IPayload<any>>());
export const getRegardListsError = createAction('[REGARD] getRegardListsError', props<IPayload<any>>());
export const getRegardListsReset = createAction('[REGARD] getRegardListsReset');

export const getRegardRequest = createAction('[REGARD] getRegardRequest', props<IPayload<any>>());
export const getRegardSuccess = createAction('[REGARD] getRegardSuccess', props<IPayload<any[]>>());
export const getRegardError = createAction('[REGARD] getRegardError', props<IPayload<any>>());
export const getRegardReset = createAction('[REGARD] getRegardReset');

export const addRegardTextRequest = createAction('[REGARD] addRegardTextRequest', props<IPayload<any>>());
export const addRegardTextSuccess = createAction('[REGARD] addRegardTextSuccess', props<IPayload<any>>());
export const addRegardTextError = createAction('[REGARD] addRegardTextError', props<IPayload<any>>());

export const updateRegardTextRequest = createAction('[REGARD] updateRegardTextRequest', props<IPayload<any>>());
export const updateRegardTextSuccess = createAction('[REGARD] updateRegardTextSuccess', props<IPayload<any>>());
export const updateRegardTextError = createAction('[REGARD] updateRegardTextError', props<IPayload<any>>());

export const delTextFromRegardRequest = createAction('[REGARD] delTextFromRegardRequest', props<IPayload<any>>());
export const delTextFromRegardSuccess = createAction('[REGARD] delTextFromRegardSuccess', props<IPayload<any>>());
export const delTextFromRegardError = createAction('[REGARD] delTextFromRegardError', props<IPayload<any>>());

export const addRegardFoundTextRequest = createAction('[REGARD] addRegardFoundTextRequest', props<IPayload<any>>());
export const addRegardFoundTextSuccess = createAction('[REGARD] addRegardFoundTextSuccess', props<IPayload<any>>());
export const addRegardFoundTextError = createAction('[REGARD] addRegardFoundTextError', props<IPayload<any>>());

export const delRegardRequest = createAction('[REGARD] delRegardRequest', props<IPayload<any>>());
export const delRegardSuccess = createAction('[REGARD] delRegardSuccess', props<IPayload<any>>());
export const delRegardError = createAction('[REGARD] delRegardError', props<IPayload<any>>());
