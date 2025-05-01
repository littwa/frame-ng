import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, finalize, switchMap, take, filter } from 'rxjs/operators';
import { APP_STORAGE } from '../constants';
import { authGetRefreshUserError, authGetRefreshUserSuccess } from '../store/auth/auth.actions';
import { startLoaderAuthRequest, stopLoaderAuthRequest, stopLoaderGeneralRequest } from '../store/loader/loader.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { generalError } from 'src/app/store/error/error.actions';
import { getTokens } from '../store/auth/auth.selectors';

let refreshTokenInProgress = false;
let refreshTokenSubject = new BehaviorSubject(null);

function addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
  const token: string = JSON.parse(localStorage.getItem(APP_STORAGE) || '{}').auth?.tokens[
    refreshTokenInProgress ? 'refreshToken' : 'accessToken'
  ];
  console.log('auth Token Interceptors', token, request);
  if (!token) {
    return request;
  }

  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const jwtInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const store = inject(Store);

  return next(addAuthToken(request)).pipe(
    catchError((requestError: HttpErrorResponse) => {
      if (requestError && requestError.status === 401) {
        if (refreshTokenInProgress) {
          store.dispatch(authGetRefreshUserError({ payload: requestError }));
          store.dispatch(stopLoaderGeneralRequest());

          return refreshTokenSubject.pipe(
            filter(result => !!result),
            take(1),

            switchMap(() => next(addAuthToken(request))),
          );
        } else {
          refreshTokenInProgress = true;
          refreshTokenSubject.next(null);
          store.dispatch(startLoaderAuthRequest());
          return authService.getRefreshTokens().pipe(
            switchMap(tokens => {
              store.dispatch(authGetRefreshUserSuccess({ payload: tokens }));
              refreshTokenSubject.next(tokens);
              store.select(getTokens).subscribe(v => console.log(112, v));
              refreshTokenInProgress = false;
              return next(addAuthToken(request));
            }),
            finalize(() => {
              store.dispatch(stopLoaderAuthRequest());
            }),
          );
        }
      } else {
        store.dispatch(generalError({ payload: requestError }));
        return throwError(() => requestError);
      }
    }),
  );
};
