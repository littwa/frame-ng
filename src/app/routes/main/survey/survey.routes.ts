import { Routes } from '@angular/router';
import { SurveyComponent } from './survey.component';

export const survey: Routes = [
  {
    path: '',
    component: SurveyComponent,
    children: [],
  },
];
