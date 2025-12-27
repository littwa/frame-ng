import { Component, inject, Inject, input, InputSignal, OnInit } from '@angular/core';
import { IRegardTextItem } from '../../../../interfaces/regard.interfaces';
import { INJECTION_TOKEN_POST_CONTENT } from 'src/app/injectors/injection.tokens';
import { JsonPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TextArrayPipe } from 'src/app/pipes/text-array-pipe';
import { MatDialog } from '@angular/material/dialog';
import { ModalImage } from 'src/app/components/modal-image/modal-image';
import { RegardService } from '../../../../services/regard.service';

@Component({
  selector: 'app-text-item-itemized',
  imports: [JsonPipe, MatIcon, TextArrayPipe],
  templateUrl: './text-item-itemized.html',
  styleUrl: './text-item-itemized.scss',
})
export class TextItemItemized implements OnInit {
  dialog = inject(MatDialog);
  regardService = inject(RegardService);

  constructor(@Inject(INJECTION_TOKEN_POST_CONTENT) public data: any) {}

  ngOnInit() {
    console.log(1000001, this.data);
  }

  protected handleImg($event: PointerEvent, img: string) {
    this.regardService.currentTextData.set(this.data.content.text);
    this.dialog.open(ModalImage, {
      data: {
        content: { name: 'Show Image' },
        template: null,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-qualify-container',
    });
  }
}
