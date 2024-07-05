import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { StockComponent } from '../../sections/stock/stock.component';
import { FooterComponent } from '../base/footer/footer.component';

export const main: Routes = [
  {
    path: '',
    component: MainComponent,
    providers: [],
    children: [{ path: '', component: StockComponent }],
  },
  // {
  //   path: 'f',
  //   component: FooterComponent,
  //   providers: [],
  // },
];
