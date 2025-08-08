import { Component, Inject, Injector, OnInit } from '@angular/core';
import { INJECTION_TOKEN_POST_CONTENT } from '../../injectors/injection.tokens';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { NgComponentOutlet } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-modal-container',
  imports: [MatDialogContent, NgComponentOutlet, MatIcon],
  standalone: true,
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
})
export class ModalContainerComponent implements OnInit {
  public postContentInjector: Injector = Injector.create({
    providers: [
      {
        provide: INJECTION_TOKEN_POST_CONTENT,
        useFactory: () => ({ content: this.data.content, dialogRef: this.dialogRef }),
        deps: [],
      },
    ],
    parent: this.injector,
  });

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalContainerComponent>,
    public injector: Injector,
  ) {}

  ngOnInit(): void {
    console.log('this.dialogRef ', this.dialogRef, this.data);
  }
}
