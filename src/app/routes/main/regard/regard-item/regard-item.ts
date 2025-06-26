import { Component, input, InputSignal } from '@angular/core';
import { IRegardItem } from 'src/app/interfaces/regard.interfaces';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-regard-item',
  imports: [MatIcon, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './regard-item.html',
  styleUrl: './regard-item.scss',
})
export class RegardItem {
  handler($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
  data: InputSignal<IRegardItem> = input();

  handlerEdit() {}

  handlerDel() {}

  handlerTest() {}
}
