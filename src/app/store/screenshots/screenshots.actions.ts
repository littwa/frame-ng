import { createAction, props } from '@ngrx/store';
import { IPayload } from 'src/app/interfaces/auth.interfaces';
import { ICreateScreenshotsList, IScreenshot, IScreenshotsList } from 'src/app/interfaces/screenshots.interfaces';

export const createScreenshotsListRequest = createAction(
  '[SCREENSHOTS] createScreenshotsListRequest',
  props<IPayload<ICreateScreenshotsList>>(),
);
export const createScreenshotsListSuccess = createAction(
  '[SCREENSHOTS] createScreenshotsListSuccess',
  props<IPayload<any>>(),
);
export const createScreenshotsListError = createAction('[SCREENSHOTS] createScreenshotsListError', props<IPayload<any>>());

export const getScreenshotsListsRequest = createAction('[SCREENSHOTS] getScreenshotsListsRequest');
export const getScreenshotsListsSuccess = createAction('[SCREENSHOTS] getScreenshotsListsSuccess', props<IPayload<any>>());
export const getScreenshotsListsError = createAction('[SCREENSHOTS] getScreenshotsListsError', props<IPayload<any>>());
export const getScreenshotsListsReset = createAction('[SCREENSHOTS] getScreenshotsListsReset');

export const delScreenshotsListRequest = createAction('[SCREENSHOTS] delScreenshotsListRequest', props<IPayload<void>>());
export const delScreenshotsListSuccess = createAction('[SCREENSHOTS] delScreenshotsListSuccess', props<IPayload<any>>());
export const delScreenshotsListError = createAction('[SCREENSHOTS] delScreenshotsListError', props<IPayload<any>>());

export const createScreenshotsRequest = createAction('[SCREENSHOTS] createScreenshotsRequest', props<IPayload<any>>());
export const createScreenshotsSuccess = createAction('[SCREENSHOTS] createScreenshotsSuccess', props<IPayload<any>>());
export const createScreenshotsError = createAction('[SCREENSHOTS] createScreenshotsError', props<IPayload<any>>());

export const getScreenshotsListRequest = createAction('[SCREENSHOTS] getScreenshotsListRequest', props<IPayload<any>>());
export const getScreenshotsListSuccess = createAction(
  '[SCREENSHOTS] getScreenshotsListSuccess',
  props<IPayload<IScreenshot[]>>(),
);
export const getScreenshotsListError = createAction('[SCREENSHOTS] getScreenshotsListError', props<IPayload<any>>());
export const getScreenshotsListReset = createAction('[SCREENSHOTS] getScreenshotsListReset');
