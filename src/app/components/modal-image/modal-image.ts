import { Component, inject, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { RegardService } from '../../services/regard.service';

@Component({
  selector: 'app-modal-image',
  imports: [],
  templateUrl: './modal-image.html',
  styleUrl: './modal-image.scss',
})
export class ModalImage implements OnInit {
  // @Inject(DIALOG_DATA) public data: any,
  regardService = inject(RegardService);
  dialogRef = inject(MatDialogRef<ModalImage>);
  data: any = inject(DIALOG_DATA);
  constructor() {
    console.log(100000000000002, this.regardService.currentTextData());
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(() => this.regardService.resetCurrentTextData());
  }
}
