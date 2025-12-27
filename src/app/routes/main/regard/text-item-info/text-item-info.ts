import { Component, inject, input, InputSignal } from '@angular/core';
import { IRegardTextItem } from 'src/app/interfaces/regard.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-text-item-info',
  imports: [DatePipe],
  templateUrl: './text-item-info.html',
  styleUrl: './text-item-info.scss',
})
export class TextItemInfo {
  data: InputSignal<IRegardTextItem> = input();
}
