import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ResolveFn } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, of, switchMap, timer } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import {
  authGetCurrentUserError,
  authGetCurrentUserRequest,
  authGetCurrentUserSuccess,
  authSignInUserSuccess,
} from '../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../store/auth/auth.selectors';

// interface Server {
//   id: number;
//   name: string;
//   status: string;
// }

// @Injectable()
// export class AuthResolver {
//   constructor(
//     private authService: AuthService,
//     private store: Store,
//     private router: Router,
//   ) {}
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
//     this.store.dispatch(authGetCurrentUserRequest());
//     return;
//   }
// }

export const authResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);
  store.dispatch(authGetCurrentUserRequest());
  console.log('authResolver--');
  return;
};
