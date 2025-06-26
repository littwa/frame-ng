import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom, Injectable } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from 'src/app/app.routes';
import { jwtInterceptor } from 'src/app/interceptors/jwt.interceptor';
import { AuthEffects } from 'src/app/store/auth/auth.effects';
import { config, reducers } from 'src/app/store';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from 'src/app/config/material-date.config';
import { ScreenshotsEffects } from './store/screenshots/screenshots.effects';
import { RegardEffects } from './store/regard/regard.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideStore(reducers, config),
    provideEffects([AuthEffects, ScreenshotsEffects, RegardEffects]),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideNativeDateAdapter(CUSTOM_DATE_FORMATS),
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
};
