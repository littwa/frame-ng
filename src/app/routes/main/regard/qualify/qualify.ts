import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectQualify, selectRegard } from 'src/app/store/regard/regard.selectors';
import { delayWhen, first, Observable, Subject, tap } from 'rxjs';
import {
  getQualifySuccess,
  getRegardRequest,
  startNextLapRequest,
  startNextLapSuccess,
} from 'src/app/store/regard/regard.actions';
import { LetDirective } from '@ngrx/component';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { IRegardItem } from 'src/app/interfaces/regard.interfaces';
import { MatButton } from '@angular/material/button';
import { QualifyText } from 'src/app/routes/main/regard/qualify-text/qualify-text';
import { TextPipe } from 'src/app/pipes/text-pipe';
import { Actions, ofType } from '@ngrx/effects';
import { TestAService } from 'src/app/services/test-a.service';

@Component({
  selector: 'app-qualify',
  imports: [LetDirective, MatButton, QualifyText, TextPipe],
  templateUrl: './qualify.html',
  styleUrl: './qualify.scss',
})
export class Qualify implements OnInit {
  testAService = inject(TestAService);
  flag = false; // for example, does not affect to logic
  actions$ = inject(Actions);
  bs$$: Subject<void> = new Subject();
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  qualify$: Observable<any> = this.store.select(selectQualify).pipe(delayWhen(() => this.bs$$));
  regard$ = this.store.select(selectRegard).pipe(tap(regard => this.initQualify(regard)));

  initQualify(regard: IRegardItem): void {
    if (!regard) {
      this.store.dispatch(getRegardRequest({ id: this.activatedRoute.snapshot.params.id, payload: null }));
    }
    if (regard) {
      const payload = regard.qualifies.find(q => q._id === this.activatedRoute.snapshot.params.idq);
      if (payload) this.store.dispatch(getQualifySuccess({ payload }));
    }
  }

  ngOnInit() {
    this.actions$.pipe(ofType(getQualifySuccess), first()).subscribe(v => this.bs$$.next());
    this.actions$.pipe(ofType(startNextLapSuccess)).subscribe(() => this.bs$$.next());
  }

  handleStartNextLap() {
    this.store.dispatch(startNextLapRequest({ payload: null, id: this.activatedRoute.snapshot.params.idq }));
  }

  handleExit() {
    this.router.navigate([`regard/list/${this.activatedRoute.snapshot.params.id}`]);
  }
}
