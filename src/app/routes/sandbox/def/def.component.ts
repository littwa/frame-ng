import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-def',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './def.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './def.component.scss',
})
export class DefComponent {}
