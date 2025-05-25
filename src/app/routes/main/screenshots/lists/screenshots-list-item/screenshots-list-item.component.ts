import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ControlService } from '../../../../../services/control.service';
import { ControlState } from '../../../../../constants/control-state';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IScreenshotsList } from 'src/app/interfaces/screenshots.interfaces';

@Component({
  selector: 'app-screenshots-list-item',
  imports: [MatIcon, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './screenshots-list-item.component.html',
  styleUrl: './screenshots-list-item.component.scss',
})
export class ScreenshotsListItemComponent {
  data: InputSignal<IScreenshotsList> = input();

  handler(e: any) {
    e.stopPropagation();
  }
}
