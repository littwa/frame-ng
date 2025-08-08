import { inject, Injectable } from '@angular/core';
import * as regardActions from 'src/app/store/regard/regard.actions';
import { RegardService } from 'src/app/services/regard.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RegardEffects {
  regardService = inject(RegardService);
  actions$ = inject(Actions);

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
}
