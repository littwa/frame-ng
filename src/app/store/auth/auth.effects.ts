import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import * as action from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { IAuthSignInRequest, IAuthSignUpRequest, IPayload } from '../../interfaces/auth.interfaces';
import { authSignInUserError, authSignUpUserError } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    public router: Router,
    private authService: AuthService,
  ) {}

  signUpUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.AUTH_SIGN_UP_USER_REQUEST),
      switchMap((props: IPayload<IAuthSignUpRequest>) =>
        this.authService.signUpUser(props.payload).pipe(
          map(data => action.authSignUpUserSuccess({ payload: data })),
          tap(data => {
            this.router.navigate(['/sign-in']);
          }),
          catchError((error: any) => of(action.authSignUpUserError({ payload: error }))),
        ),
      ),
    ),
  );

  signInUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.AUTH_SIGN_IN_USER_REQUEST),
      switchMap((props: IPayload<IAuthSignInRequest>) =>
        this.authService.signInUser(props.payload).pipe(
          map(data => action.authSignInUserSuccess({ payload: data })),
          tap(() => this.router.navigate(['/'])),
          catchError((error: any) => of(action.authSignInUserError({ payload: error }))),
        ),
      ),
    ),
  );

  signOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.AUTH_SIGN_OUT_USER_REQUEST),
      switchMap(() =>
        this.authService.signOutCurrentUser().pipe(
          map(data => action.authSignOutUserSuccess()),
          tap(data => this.router.navigate(['/sign-in'])),
          catchError((error: any) => of(action.authSignOutUserError({ payload: error }))),
          tap(data => this.router.navigate(['/sign-in'])),
        ),
      ),
    ),
  );

  // No use: action.AUTH_GET_REFRESH_USER_REQUEST
  // getRefreshTokens$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(action.AUTH_GET_REFRESH_USER_REQUEST),
  //     switchMap((props: IPayload<any>) =>
  //       this.authService.getRefreshTokens().pipe(
  //         map(data => action.authGetRefreshUserSuccess({ payload: data })),
  //         catchError((error: any) => of(action.authGetRefreshUserError({ payload: error }))),
  //       ),
  //     ),
  //   ),
  // );

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.AUTH_GET_CURRENT_USER_REQUEST),
      switchMap((props: IPayload<any>) =>
        this.authService.getCurrentUser().pipe(
          map(data => action.authGetCurrentUserSuccess({ payload: data })),
          catchError((error: any) => {
            return of(action.authGetCurrentUserError({ payload: error }));
          }),
        ),
      ),
    ),
  );

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.AUTH_UPDATE_USER_REQUEST),
      switchMap(({ payload, id }) =>
        this.authService.updateCurrentUser(payload, id).pipe(
          map(data => action.authUpdateUserSuccess({ payload: data })),
          catchError((error: any) => of(action.authUpdateUserError({ payload: error }))),
        ),
      ),
    ),
  );

  //   verifyAdmin$ = createEffect(() => this.actions$.pipe(
  //     ofType(action.AUTH_VERIFY_MANAGER_REQUEST),
  //     switchMap((props: any) => this.managerService.verifyManger(props.payload).pipe(
  //       map(data => action.authVerifyManagerSuccess({ payload: data })),
  //       tap((data: any) => { this.setAdminTokenLocalStorage(data.payload.token); this.router.navigate(['/order']); }), // login'
  //       catchError((err: any) => of(action.authVerifyManagerError({ err: err.message })))
  //     ))
  //   ));
  //
  //   verifyCustomer$ = createEffect(() => this.actions$.pipe(
  //     ofType(action.AUTH_VERIFY_CUSTOMER_REQUEST),
  //     switchMap(
  //       (props: any) => {
  //         return this.managerService.verifyCustomer(props.payload).pipe(
  //           map(data => action.authVerifyManagerSuccess({ payload: data })),
  //           tap((data: any) => { this.router.navigate(['/']); }),
  //           catchError((err: any) => of(action.authVerifyManagerError({ err: err.message })))
  //         );
  //       }
  //     )
  //   ));
  //
  //
  //   private setMangerTokenLocalStorage(tokens: any): void {
  //     if (tokens) {
  //       localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS, tokens.accessToken);
  //       localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_REFRESH, tokens.refreshToken);
  //     }
  //   }
  //
  //   private setAdminTokenLocalStorage(token: any): void {
  //     if (token) {
  //       localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS, token);
  //
  //     }
  //   }
  //
  //   private clearMangerTokenLocalStorage(): void {
  //     localStorage.clear();
  //   }
  //
}
