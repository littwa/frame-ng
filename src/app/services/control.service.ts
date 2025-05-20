import { inject, Injectable } from '@angular/core';
import { IStateControl } from 'src/app/interfaces/common.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ControlState } from 'src/app/constants/control-state';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  state$$ = new BehaviorSubject<IStateControl[]>(ControlState.initial);

  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);
  location = inject(Location);

  constructor() {}
}
