import { ActionReducerMap, combineReducers, createReducer, on } from '@ngrx/store';
import * as screenshotsActions from 'src/app/store/screenshots/screenshots.actions';

export const screenshotsListsReducer = createReducer(
  null,
  on(screenshotsActions.getScreenshotsListsSuccess, (s, a) => a.payload),
  on(screenshotsActions.createScreenshotsListSuccess, (s, a) => [...s, a.payload]),
  on(screenshotsActions.delScreenshotsListSuccess, (s, a) => s.filter(r => a.payload !== r._id)),
  on(screenshotsActions.getScreenshotsListsReset, () => null),
);

export const screenshotsListReducer = createReducer(
  null,
  on(screenshotsActions.getScreenshotsListSuccess, (s, a) => a.payload),
  on(screenshotsActions.createScreenshotsSuccess, (s, a) => a.payload),
  on(screenshotsActions.getScreenshotsListReset, () => null),
);

export const screenshotsReducers = combineReducers({
  lists: screenshotsListsReducer,
  list: screenshotsListReducer,
});
