import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-screenshots',
  imports: [RouterOutlet],
  templateUrl: './screenshots.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './screenshots.component.scss',
})
export class ScreenshotsComponent {}
