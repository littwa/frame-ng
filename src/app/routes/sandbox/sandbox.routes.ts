import { Routes } from '@angular/router';
import { SandboxComponent } from './sandbox.component';

export const sandbox: Routes = [
  {
    path: '',
    component: SandboxComponent,
    providers: [],
    children: [],
  },
  // {
  //   path: 'f',
  //   component: FooterComponent,
  //   providers: [],
  // },
];
