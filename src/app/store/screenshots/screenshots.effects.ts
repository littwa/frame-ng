import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ScreenshotsService } from 'src/app/services/screenshots.service';
import * as screenshotsActions from './screenshots.actions';
import { switchMap, map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ScreenshotsEffects {
  screenshotsService = inject(ScreenshotsService);

  constructor(
    private actions$: Actions,
    // private screenshotsService: ScreenshotsService,
  ) {}

  addScreenshotsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(screenshotsActions.createScreenshotsListRequest),
      switchMap(p =>
        this.screenshotsService.createList(p.payload).pipe(
          map(res => screenshotsActions.createScreenshotsListSuccess({ payload: res })),
          catchError(err => of(screenshotsActions.createScreenshotsListError({ payload: err }))),
        ),
      ),
    ),
  );

  delScreenshotsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(screenshotsActions.delScreenshotsListRequest),
      switchMap(p =>
        this.screenshotsService.delList(p.id).pipe(
          map(res => screenshotsActions.delScreenshotsListSuccess({ payload: p.id })),
          catchError(err => of(screenshotsActions.delScreenshotsListError({ payload: err }))),
        ),
      ),
    ),
  );

  getScreenshotsLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(screenshotsActions.getScreenshotsListsRequest),
      switchMap(p =>
        this.screenshotsService.getLists().pipe(
          map(res => screenshotsActions.getScreenshotsListsSuccess({ payload: res })),
          catchError(err => of(screenshotsActions.getScreenshotsListsError({ payload: err }))),
        ),
      ),
    ),
  );

  createScreenshots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(screenshotsActions.createScreenshotsRequest),
      switchMap(p =>
        this.screenshotsService.createScreenshots(p.payload, p.id).pipe(
          map(res => screenshotsActions.createScreenshotsSuccess({ payload: res })),
          catchError(err => of(screenshotsActions.createScreenshotsError({ payload: err }))),
        ),
      ),
    ),
  );

  getScreenshotsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(screenshotsActions.getScreenshotsListRequest),
      switchMap(p =>
        this.screenshotsService.getList(p.id).pipe(
          map(res => screenshotsActions.getScreenshotsListSuccess({ payload: res })),
          catchError(err => of(screenshotsActions.getScreenshotsListError({ payload: err }))),
        ),
      ),
    ),
  );
}
