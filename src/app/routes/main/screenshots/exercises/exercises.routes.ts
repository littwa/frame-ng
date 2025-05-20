import { Routes } from '@angular/router';

export const exercises: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/routes/main/screenshots/exercises/exercises.component').then(x => x.ExercisesComponent),
  },
];
