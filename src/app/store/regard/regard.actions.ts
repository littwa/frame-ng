import { createAction, props } from '@ngrx/store';
import { IPayload } from 'src/app/interfaces/auth.interfaces';

export const createRegardListRequest = createAction('[REGARD] createRegardListRequest', props<IPayload<any>>());
export const createRegardListSuccess = createAction('[REGARD] createRegardListSuccess', props<IPayload<any>>());
export const createRegardListError = createAction('[REGARD] createRegardListError', props<IPayload<any>>());

export const getRegardListsRequest = createAction('[REGARD] getRegardListsRequest');
export const getRegardListsSuccess = createAction('[REGARD] getRegardListsSuccess', props<IPayload<any>>());
export const getRegardListsError = createAction('[REGARD] getRegardListsError', props<IPayload<any>>());
export const getRegardListsReset = createAction('[REGARD] getRegardListsReset');

// export const delScreenshotsListRequest = createAction('[SCREENSHOTS] delScreenshotsListRequest', props<IPayload<void>>());
// export const delScreenshotsListSuccess = createAction('[SCREENSHOTS] delScreenshotsListSuccess', props<IPayload<any>>());
// export const delScreenshotsListError = createAction('[SCREENSHOTS] delScreenshotsListError', props<IPayload<any>>());

// export const createScreenshotsRequest = createAction('[SCREENSHOTS] createScreenshotsRequest', props<IPayload<any>>());
// export const createScreenshotsSuccess = createAction('[SCREENSHOTS] createScreenshotsSuccess', props<IPayload<any>>());
// export const createScreenshotsError = createAction('[SCREENSHOTS] createScreenshotsError', props<IPayload<any>>());

// export const getScreenshotsListRequest = createAction('[SCREENSHOTS] getScreenshotsListRequest', props<IPayload<any>>());
// export const getScreenshotsListSuccess = createAction('[SCREENSHOTS] getScreenshotsListSuccess', props<IPayload<any[]>>());
// export const getScreenshotsListError = createAction('[SCREENSHOTS] getScreenshotsListError', props<IPayload<any>>());
// export const getScreenshotsListReset = createAction('[SCREENSHOTS] getScreenshotsListReset');
