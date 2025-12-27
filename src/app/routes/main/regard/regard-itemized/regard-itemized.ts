import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRegardRequest } from 'src/app/store/regard/regard.actions';
import { selectRegard } from 'src/app/store/regard/regard.selectors';
import { LetDirective } from '@ngrx/component';
import { TextItem } from 'src/app/routes/main/regard/text-item/text-item';
import { Observable, Subject, tap } from 'rxjs';
import { IRegardItemPopulate } from 'src/app/interfaces/regard.interfaces';
import { map } from 'rxjs/operators';
import { RegardService } from 'src/app/services/regard.service';
import { ControlState } from 'src/app/constants/control-state';
import { ControlService } from 'src/app/services/control.service';
import { IStateNavControl } from 'src/app/interfaces/common.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-regard-itemized',
  imports: [LetDirective, TextItem, DatePipe],
  templateUrl: './regard-itemized.html',
  styleUrl: './regard-itemized.scss',
})
export class RegardItemized implements OnInit, OnDestroy {
  store = inject(Store);
  router = inject(Router);
  // regardService = inject(RegardService);
  private unsubscribe$ = new Subject<void>();
  activatedRoute = inject(ActivatedRoute);
  controlService$ = inject(ControlService);

  regard$: Observable<IRegardItemPopulate> = this.store.select(selectRegard).pipe(
    // tap(v => this.regardService.regardItemizedData.set(v)),
    // tap(v => console.log(100033333333, v)),
    tap(v => v && this.controlService$.state$$.next(this.defineControlStateRegardItemizedBtn3Activity(v))),
    map(v => (!v ? {} : v)),
  );

  ngOnInit() {
    this.store.dispatch(getRegardRequest({ id: this.activatedRoute.snapshot.params.id, payload: null }));
    console.log(this.activatedRoute.snapshot.params.id);
    console.log(this.router);

    // TSTA.qf(2);
    // console.log(49, TSTA, TSTA.qm());
  }

  defineControlStateRegardItemizedBtn3Activity(regard: IRegardItemPopulate): IStateNavControl {
    const regardItemized = ControlState.regardItemized;
    regardItemized.btn3.data.disabled = regard.qualifies.some(q => !q.finished);
    // const controlStateRegardItemized = regard.qualifies.find(q => !q.finished) ? { ...ControlState.regardItemized } : {};
    return regardItemized;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
