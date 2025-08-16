import { Component, inject, input, InputSignal } from '@angular/core';
import { IRegardItem } from 'src/app/interfaces/regard.interfaces';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { delRegardRequest } from '../../../../store/regard/regard.actions';

@Component({
  selector: 'app-regard-item',
  imports: [MatIcon, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './regard-item.html',
  styleUrl: './regard-item.scss',
})
export class RegardItem {
  data: InputSignal<IRegardItem> = input();
  store = inject(Store);

  handlerEdit() {}

  handlerDel() {
    this.store.dispatch(delRegardRequest({ id: this.data()._id, payload: null }));
  }

  handlerTest() {}
}
