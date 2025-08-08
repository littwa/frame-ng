import { Component, inject, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IRegardTextItem } from 'src/app/interfaces/regard.interfaces';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ModalContainerComponent } from 'src/app/components/modal-container/modal-container.component';
import { MatDialog } from '@angular/material/dialog';
import { RegardTextUpdate } from 'src/app/routes/main/regard/regard-text-update/regard-text-update';

@Component({
  selector: 'app-text-item',
  imports: [RouterLink, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './text-item.html',
  styleUrl: './text-item.scss',
})
export class TextItem {
  data: InputSignal<IRegardTextItem> = input();
  dialog = inject(MatDialog);

  handler($event: MouseEvent) {}

  handlerEditTxt() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Update Text', text: this.data() },
        template: RegardTextUpdate,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-custom-container',
    });
  }

  handlerDelTxt() {}

  handlerMarkAsFinishTxt() {}

  handlerResetTxt() {}

  handlerAddToFavorite() {}
}
