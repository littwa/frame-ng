import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRegardRequest } from 'src/app/store/regard/regard.actions';
import { selectRegard } from '../../../../store/regard/regard.selectors';
import { LetDirective } from '@ngrx/component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TextItem } from 'src/app/routes/main/regard/text-item/text-item';
import { Observable, Subject } from 'rxjs';
import { IRegardItemPopulate } from 'src/app/interfaces/regard.interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-regard-itemized',
  imports: [RouterLink, LetDirective, AsyncPipe, JsonPipe, TextItem],
  templateUrl: './regard-itemized.html',
  styleUrl: './regard-itemized.scss',
})
export class RegardItemized implements OnInit, OnDestroy {
  store = inject(Store);
  router = inject(Router);
  private unsubscribe$ = new Subject<void>();
  activatedRoute = inject(ActivatedRoute);
  regard$: Observable<IRegardItemPopulate> = this.store.select(selectRegard).pipe(map(v => (!v ? {} : v)));

  ngOnInit() {
    this.store.dispatch(getRegardRequest({ id: this.activatedRoute.snapshot.params.id, payload: null }));
    console.log(this.activatedRoute.snapshot.params.id);
    console.log(this.router);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
