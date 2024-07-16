import { Component } from '@angular/core';
import { DefComponent } from './def/def.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [DefComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss',
})
export class SandboxComponent {}
