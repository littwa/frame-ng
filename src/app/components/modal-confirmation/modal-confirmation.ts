import { Component, inject, OnInit } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal-confirmation',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatButton],
  templateUrl: './modal-confirmation.html',
  styleUrl: './modal-confirmation.scss',
})
export class ModalConfirmation implements OnInit {
  data = inject(DIALOG_DATA);

  ngOnInit(): void {
    console.log(5656, this.data);
  }
}
