import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectQualify, selectRegard } from '../../../../store/regard/regard.selectors';
import { Observable, tap } from 'rxjs';
import { getQualifySuccess, getRegardRequest } from '../../../../store/regard/regard.actions';
import { LetDirective } from '@ngrx/component';
import { selectGeneralLoader } from '../../../../store/loader/loader.selectors';
import { RegardItemized } from '../regard-itemized/regard-itemized';
import { IRegardItem } from '../../../../interfaces/regard.interfaces';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-qualify',
  imports: [LetDirective, MatButton],
  templateUrl: './qualify.html',
  styleUrl: './qualify.scss',
})
export class Qualify implements OnInit {
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  qualify$ = this.store.select(selectQualify);
  regard$ = this.store.select(selectRegard).pipe(tap(regard => this.initQualify(regard)));

  initQualify(regard: IRegardItem): void {
    if (!regard) {
      this.store.dispatch(getRegardRequest({ id: this.activatedRoute.snapshot.params.id, payload: null }));
    }
    if (regard) {
      const payload = regard.qualifies.find(q => q._id === this.activatedRoute.snapshot.params.idq);
      this.store.dispatch(getQualifySuccess({ payload }));
    }
  }

  ngOnInit() {
    console.log('Qualify this.activatedRoute.snapshot', this.activatedRoute.snapshot);
    console.log('Qualify this.router', this.router);
  }
}
