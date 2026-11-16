import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './component-a.scss',
})
export class ComponentA {}
