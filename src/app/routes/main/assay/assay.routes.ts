import { Routes } from '@angular/router';
import { Assay } from './assay';

export const assay: Routes = [
  {
    path: '',
    component: Assay,
    children: [],
  },
];
