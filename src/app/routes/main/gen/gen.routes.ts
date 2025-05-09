import { Routes } from '@angular/router';
import { GenComponent } from './gen.component';

export const gen: Routes = [
  {
    path: '',
    component: GenComponent,
    children: [],
  },
];
