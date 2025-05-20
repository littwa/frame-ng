import { Routes } from '@angular/router';

export const essentials: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/routes/main/screenshots/essentials/essentials.component').then(x => x.EssentialsComponent),
  },
];
