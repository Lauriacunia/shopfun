import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component.js';
import { AboutComponent } from './domains/info/pages/about/about.component.js';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
