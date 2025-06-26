import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRegardRequest } from 'src/app/store/regard/regard.actions';
import { selectRegard } from '../../../../store/regard/regard.selectors';
import { LetDirective } from '@ngrx/component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TextItem } from '../text-item/text-item';
import { Observable } from 'rxjs';
import { IRegardItemPopulate } from '../../../../interfaces/regard.interfaces';

@Component({
  selector: 'app-regard-itemized',
  imports: [RouterLink, LetDirective, AsyncPipe, JsonPipe, TextItem],
  templateUrl: './regard-itemized.html',
  styleUrl: './regard-itemized.scss',
})
export class RegardItemized implements OnInit {
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  regard$: Observable<IRegardItemPopulate> = this.store.select(selectRegard);

  ngOnInit() {
    this.store.dispatch(getRegardRequest({ id: this.activatedRoute.snapshot.params.id, payload: null }));
    console.log(this.activatedRoute.snapshot.params.id);
    console.log(this.router);
  }
}
