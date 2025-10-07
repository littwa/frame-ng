import { inject, Injectable } from '@angular/core';
import * as regardActions from 'src/app/store/regard/regard.actions';
import { RegardService } from 'src/app/services/regard.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  addRegardFoundTextRequest,
  delTextFromRegardRequest,
  markTextFinishQualifyRequest,
  resetTextQualifyRequest,
  startNextLapRequest,
} from 'src/app/store/regard/regard.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class RegardEffects {
  regardService = inject(RegardService);
  actions$ = inject(Actions);
  store = inject(Store);

  getRegards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.getRegardListsRequest),
      switchMap(p =>
        this.regardService.getRegards().pipe(
          map(res => regardActions.getRegardListsSuccess({ payload: res })),
          catchError(err => of(regardActions.getRegardListsError({ payload: err }))),
        ),
      ),
    ),
  );

  addRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.addRegardListRequest),
      switchMap(p =>
        this.regardService.addRegard(p.payload).pipe(
          map(res => regardActions.addRegardListSuccess({ payload: res })),
          catchError(err => of(regardActions.addRegardListError({ payload: err }))),
        ),
      ),
    ),
  );

  getRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.getRegardRequest),
      switchMap(p =>
        this.regardService.getOne(p.id).pipe(
          map(res => regardActions.getRegardSuccess({ payload: res })),
          catchError(err => of(regardActions.getRegardError({ payload: err }))),
        ),
      ),
    ),
  );

  addTextRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.addRegardTextRequest),
      switchMap(p =>
        this.regardService.createAddText(p.payload, p.id).pipe(
          map(res => regardActions.addRegardTextSuccess({ payload: res })),
          catchError(err => of(regardActions.addRegardTextError({ payload: err }))),
        ),
      ),
    ),
  );

  addRegardFoundText$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRegardFoundTextRequest),
      switchMap(p =>
        this.regardService.addFoundText(p.payload.textId, p.payload.regardId).pipe(
          map(res => regardActions.addRegardFoundTextSuccess({ payload: res })),
          catchError(err => of(regardActions.addRegardFoundTextError({ payload: err }))),
        ),
      ),
    ),
  );

  updateTextRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.updateRegardTextRequest),
      switchMap(p =>
        this.regardService.updateText(p.payload, p.id).pipe(
          map(res => regardActions.updateRegardTextSuccess({ payload: res })),
          catchError(err => of(regardActions.updateRegardTextError({ payload: err }))),
        ),
      ),
    ),
  );

  delTextFromRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.delTextFromRegardRequest),
      switchMap(p =>
        this.regardService.delText(p.payload.textId, p.payload.regardId).pipe(
          tap(t => console.log(p)),
          map(res => regardActions.delTextFromRegardSuccess({ payload: res })),
          catchError(err => of(regardActions.delTextFromRegardError({ payload: err }))),
        ),
      ),
    ),
  );

  delRegard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.delRegardRequest),
      switchMap(p =>
        this.regardService.delRegard(p.id).pipe(
          map(res => regardActions.delRegardSuccess({ payload: res, id: p.id })),
          catchError(err => of(regardActions.delRegardError({ payload: err }))),
        ),
      ),
    ),
  );

  createQualify$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.createQualifyRequest),
      switchMap(p =>
        this.regardService.createQualify(p.payload, p.id).pipe(
          map(res => regardActions.createQualifySuccess({ payload: res })),
          catchError(err => of(regardActions.createQualifyError({ payload: err }))),
        ),
      ),
    ),
  );

  checkQualify$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.checkQualifyRequest),
      switchMap(p =>
        this.regardService.checkQualify(p.payload.body, p.payload.textId, p.payload.regardId, p.payload.qualifyId).pipe(
          map(res => regardActions.checkQualifySuccess({ payload: res })),
          tap(() => this.store.dispatch(regardActions.getRegardRequest({ id: p.payload.regardId, payload: null }))),
          catchError(err => of(regardActions.checkQualifyError({ payload: err }))),
        ),
      ),
    ),
  );

  startNextLap$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.startNextLapRequest),
      switchMap(p =>
        this.regardService.startNextLap(p.id).pipe(
          map(res => regardActions.startNextLapSuccess({ payload: res })),
          catchError(err => of(regardActions.startNextLapError({ payload: err }))),
        ),
      ),
    ),
  );

  resetTextQualify$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.resetTextQualifyRequest),
      switchMap(p =>
        this.regardService.resetTextQualify(p.payload.textId, p.payload.regardId, p.payload.qualifyId).pipe(
          map(res => regardActions.resetTextQualifySuccess({ payload: res })),
          catchError(err => of(regardActions.resetTextQualifyError({ payload: err }))),
        ),
      ),
    ),
  );

  markTextFinishQualify$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regardActions.markTextFinishQualifyRequest),
      switchMap(p =>
        this.regardService.markTextAsFinishQualify(p.payload.textId, p.payload.regardId, p.payload.qualifyId).pipe(
          map(res => regardActions.markTextFinishQualifySuccess({ payload: res })),
          catchError(err => of(regardActions.markTextFinishQualifyError({ payload: err }))),
        ),
      ),
    ),
  );
}
