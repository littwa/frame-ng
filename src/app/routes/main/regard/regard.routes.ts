import { Routes } from '@angular/router';
import { Regard } from './regard';

export const regard: Routes = [
  {
    path: '',
    component: Regard,
    children: [
      {
        path: '',
        loadComponent: () => import('src/app/routes/main/regard/regard-home/regard-home').then(x => x.RegardHome),
      },
      {
        path: 'list',
        loadComponent: () => import('src/app/routes/main/regard/regard-list/regard-list').then(x => x.RegardList),
      },
      {
        path: 'list/:id',
        loadComponent: () =>
          import('src/app/routes/main/regard/regard-itemized/regard-itemized').then(x => x.RegardItemized),
      },
      {
        path: 'list/:id/qualify/:idq',
        loadComponent: () => import('src/app/routes/main/regard/qualify/qualify').then(x => x.Qualify),
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('src/app/routes/main/regard/regard-statistics/regard-statistics').then(x => x.RegardStatistics),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('src/app/routes/main/regard/regard-favorite/regard-favorite').then(x => x.RegardFavorite),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('src/app/routes/main/regard/regard-settings/regard-settings').then(x => x.RegardSettings),
      },
    ],
  },
];
