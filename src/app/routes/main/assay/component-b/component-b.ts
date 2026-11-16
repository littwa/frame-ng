import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './component-b.scss',
})
export class ComponentB {}
