import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ControlService } from '../../../../../services/control.service';
import { ControlState } from '../../../../../constants/control-state';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IScreenshotsList } from 'src/app/interfaces/screenshots.interfaces';
import { createAction, Store } from '@ngrx/store';
import { delScreenshotsListRequest } from 'src/app/store/screenshots/screenshots.actions';

export const actionTest = createAction('TEST');

@Component({
  selector: 'app-screenshots-list-item',
  imports: [MatIcon, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './screenshots-list-item.component.html',
  styleUrl: './screenshots-list-item.component.scss',
})
export class ScreenshotsListItemComponent {
  data: InputSignal<IScreenshotsList> = input();
  store = inject(Store);

  handler(e: any) {
    e.stopPropagation();
  }

  handlerDel() {
    this.store.dispatch(delScreenshotsListRequest({ id: this.data()._id, payload: null }));
  }

  handlerTest() {
    this.store.dispatch(actionTest());
  }

  handlerEdit() {
    // this.store.dispatch();
  }
}
