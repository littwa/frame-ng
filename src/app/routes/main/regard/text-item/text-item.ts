import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IRegardTextItem } from 'src/app/interfaces/regard.interfaces';

@Component({
  selector: 'app-text-item',
  imports: [RouterLink],
  templateUrl: './text-item.html',
  styleUrl: './text-item.scss',
})
export class TextItem {
  data: InputSignal<IRegardTextItem> = input();
}
