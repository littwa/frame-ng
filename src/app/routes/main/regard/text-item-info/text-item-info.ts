import { Component, inject, input, InputSignal } from '@angular/core';
import { IRegardTextItem } from '../../../../interfaces/regard.interfaces';

@Component({
  selector: 'app-text-item-info',
  imports: [],
  templateUrl: './text-item-info.html',
  styleUrl: './text-item-info.scss',
})
export class TextItemInfo {
  data: InputSignal<IRegardTextItem> = input();
}
