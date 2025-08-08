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

// export const delScreenshotsListRequest = createAction('[SCREENSHOTS] delScreenshotsListRequest', props<IPayload<void>>());
// export const delScreenshotsListSuccess = createAction('[SCREENSHOTS] delScreenshotsListSuccess', props<IPayload<any>>());
// export const delScreenshotsListError = createAction('[SCREENSHOTS] delScreenshotsListError', props<IPayload<any>>());

// export const createScreenshotsRequest = createAction('[SCREENSHOTS] createScreenshotsRequest', props<IPayload<any>>());
// export const createScreenshotsSuccess = createAction('[SCREENSHOTS] createScreenshotsSuccess', props<IPayload<any>>());
// export const createScreenshotsError = createAction('[SCREENSHOTS] createScreenshotsError', props<IPayload<any>>());
