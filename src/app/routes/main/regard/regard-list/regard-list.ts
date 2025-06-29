import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRegardListsRequest, getRegardReset } from 'src/app/store/regard/regard.actions';
import { selectRegards } from 'src/app/store/regard/regard.selectors';
import { LetDirective } from '@ngrx/component';
import { RegardItem } from '../regard-item/regard-item';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { ModalContainerComponent } from 'src/app/components/modal-container/modal-container.component';
import { MatDialog } from '@angular/material/dialog';
import { RegardAdd } from 'src/app/routes/main/regard/regard-add/regard-add';

@Component({
  selector: 'app-regard-list',
  imports: [LetDirective, RegardItem, RouterLink, MatButton],
  templateUrl: './regard-list.html',
  styleUrl: './regard-list.scss',
})
export class RegardList implements OnInit, OnDestroy {
  dialog = inject(MatDialog);
  store = inject(Store);
  regards$ = this.store.select(selectRegards);

  ngOnInit() {
    this.store.dispatch(getRegardListsRequest());
  }

  handler() {}

  addHandler(e) {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Add Regard' },
        template: RegardAdd,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'custom-container',
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(getRegardReset());
  }
}
