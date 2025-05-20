import { Routes } from '@angular/router';
import { ScreenshotsComponent } from './screenshots.component';

export const screenshots: Routes = [
  {
    path: '',
    component: ScreenshotsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/routes/main/screenshots/menu/menu.routes').then(x => x.menu),
      },
      { path: 'lists', loadChildren: () => import('src/app/routes/main/screenshots/lists/lists.routes').then(x => x.lists) },
      {
        path: 'essentials',
        loadChildren: () => import('src/app/routes/main/screenshots/essentials/essentials.routes').then(x => x.essentials),
      },
      {
        path: 'exercises',
        loadChildren: () => import('src/app/routes/main/screenshots/exercises/exercises.routes').then(x => x.exercises),
      },
    ],
  },
];
