import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DefComponent } from './def/def.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [DefComponent],
  templateUrl: './sandbox.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sandbox.component.scss',
})
export class SandboxComponent {}
