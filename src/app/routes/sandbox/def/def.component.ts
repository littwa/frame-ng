import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-def',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './def.component.html',
  styleUrl: './def.component.scss',
})
export class DefComponent {}
