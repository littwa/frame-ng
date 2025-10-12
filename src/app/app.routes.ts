import { Routes } from '@angular/router';
import { BaseComponent } from 'src/app/routes/base/base.component';
import { authResolver } from './resolvers/auth.resolver';
import { UserProfileComponent } from './routes/user/user-profile/user-profile.component';
import { MainComponent } from './routes/main/main.component';
import { SettingsComponent } from './routes/user/settings/settings.component';
import { UserComponent } from './routes/user/user.component';
import { navResolver } from './resolvers/nav.resolver';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    resolve: { navResolver },
    children: [
      {
        path: '',
        component: MainComponent,
        providers: [],
        resolve: { res: authResolver },
        children: [
          { path: '', loadChildren: () => import('src/app/routes/main/stock/stock.routes').then(x => x.stock) },
          { path: 'regard', loadChildren: () => import('src/app/routes/main/regard/regard.routes').then(x => x.regard) },
          { path: 'gen', loadChildren: () => import('src/app/routes/main/gen/gen.routes').then(x => x.gen) },
          {
            path: 'screenshots',
            loadChildren: () => import('src/app/routes/main/screenshots/screenshots.routes').then(x => x.screenshots),
          },
          { path: 'survey', loadChildren: () => import('src/app/routes/main/survey/survey.routes').then(x => x.survey) },
          { path: 'assay', loadChildren: () => import('src/app/routes/main/assay/assay.routes').then(x => x.assay) },
        ],
      },
      {
        path: 'user',
        component: UserComponent,
        resolve: { res: authResolver },
        children: [
          { path: 'profile/:id', component: UserProfileComponent },
          { path: 'settings/:id', component: SettingsComponent },
        ],
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
