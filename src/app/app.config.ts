import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { authReducers } from './store/auth/auth.reducers';
import { loadersReducers } from './store/loader/loader.reducers';
import { jwtInterceptor } from './interceptors/jwt.interceptor';
import { errorReducer } from './store/error/error.reducers';
import { AuthEffects } from './store/auth/auth.effects';
import { storageMetaReducer } from './store/store.persist';
import { IStore } from './interfaces/store.interfaces';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideStore(
      {},
      {
        runtimeChecks: {},
        metaReducers: [storageMetaReducer], // <--- Meta reducers here
      },
    ),
    provideState('auth', authReducers),
    provideState('loader', loadersReducers),
    provideState('error', errorReducer),
    provideEffects([AuthEffects]),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
