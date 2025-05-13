import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { NavComponent } from '../../routes/base/nav/nav.component';

@Component({
  selector: 'app-control',
  imports: [MatIcon],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
})
export class ControlComponent {
  dialog = inject(MatDialog);

  openNavMenu() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { isBurger: true, name: 'Navigate menu' },
        template: NavComponent,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'custom-container',
    });
  }
}
