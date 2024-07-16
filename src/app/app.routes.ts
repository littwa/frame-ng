import { Routes } from '@angular/router';
import { BaseComponent } from 'src/app/routes/base/base.component';
import { authResolver } from './resolvers/auth.resolver';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/routes/main/main.routes').then(x => x.main),
        resolve: { res: authResolver },
      },
      {
        path: 'sign-in',
        loadChildren: () => import('src/app/routes/sign-in/sign-in.routes').then(x => x.signIn),
      },
      {
        path: 'sign-up',
        loadChildren: () => import('src/app/routes/sign-up/sign-up.routes').then(x => x.signUp),
      },
      {
        path: 'sandbox',
        loadChildren: () => import('src/app/routes/sandbox/sandbox.routes').then(x => x.sandbox),
      },
    ],
  },
];
