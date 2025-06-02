import { Component, input, Input, InputSignal } from '@angular/core';
import { IScreenshot } from 'src/app/interfaces/screenshots.interfaces';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-screenshots-item',
  imports: [JsonPipe, NgOptimizedImage],
  templateUrl: './screenshots-item.component.html',
  styleUrl: './screenshots-item.component.scss',
})
export class ScreenshotsItemComponent {
  screenshot: InputSignal<IScreenshot> = input();
}
