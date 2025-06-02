import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScreenshotsListItemComponent } from './screenshots-list-item/screenshots-list-item.component';
import { RouterLink } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { ControlState } from 'src/app/constants/control-state';
import { Store } from '@ngrx/store';
import { selectScreenshotsLists } from 'src/app/store/screenshots/screenshots.selectors';
import * as screenshotsActions from 'src/app/store/screenshots/screenshots.actions';
import { LetDirective } from '@ngrx/component';


@Component({
  selector: 'app-lists',
  imports: [MatIcon, ScreenshotsListItemComponent, RouterLink, LetDirective],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
})
export class ListsComponent implements OnInit {
  controlService = inject(ControlService);
  store = inject(Store);
  lists$ = this.store.select(selectScreenshotsLists);
  constructor() {}

  ngOnInit() {
    this.store.dispatch(screenshotsActions.getScreenshotsListsRequest());
    // this.controlService.state$$.next(ControlState.screenshotsLists);
  }
}
