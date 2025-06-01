import { Routes } from '@angular/router';

export const lists: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/routes/main/screenshots/lists/lists.component').then(x => x.ListsComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('src/app/routes/main/screenshots/lists/screenshots-list/screenshots-list.component').then(
        x => x.ScreenshotsListComponent,
      ),
  },
  {
    path: 'list',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
