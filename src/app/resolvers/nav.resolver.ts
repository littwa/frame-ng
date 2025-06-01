import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
  ResolveFn,
  NavigationEnd,
} from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { filter, Observable, of, switchMap, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { ControlService } from 'src/app/services/control.service';
import { ControlState } from '../constants/control-state';
import { IStateNavControl } from '../interfaces/common.interfaces';

export const navResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);
  const router = inject(Router);
  const controlService = inject(ControlService);

  router.events.pipe(filter(v => v.type === 1)).subscribe(n => {
    console.log(1111, n);
    const stateNavControl = matcherState(n);
    controlService.state$$.next(stateNavControl);
  });

  const matcherState = (value: NavigationEnd): IStateNavControl => {
    const { url } = value;
    switch (true) {
      case url === '/':
        return ControlState.initial;
      case url === '/screenshots':
        return ControlState.initial;
      case url === '/screenshots/lists':
        return ControlState.screenshotsLists;
      case url.startsWith('/screenshots/lists/'):
        return ControlState.screenshotsList;
      default:
        return ControlState.initial;
    }
  };
};
