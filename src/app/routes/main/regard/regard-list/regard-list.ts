import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRegardListsRequest } from 'src/app/store/regard/regard.actions';
import { selectRegards } from 'src/app/store/regard/regard.selectors';
import { LetDirective } from '@ngrx/component';
import { RegardItem } from '../regard-item/regard-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-regard-list',
  imports: [LetDirective, RegardItem, RouterLink],
  templateUrl: './regard-list.html',
  styleUrl: './regard-list.scss',
})
export class RegardList implements OnInit {
  store = inject(Store);
  regards$ = this.store.select(selectRegards);

  ngOnInit() {
    this.store.dispatch(getRegardListsRequest());
  }

  handler() {}
}
