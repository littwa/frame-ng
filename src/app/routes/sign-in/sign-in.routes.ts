import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';

export const signIn: Routes = [
  {
    path: '',
    component: SignInComponent,
    providers: [],
    children: [],
  },
];
