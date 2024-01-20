import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/pages/layout/layout.component.js';
import { ListComponent } from './domains/products/pages/list/list.component.js';
import { AboutComponent } from './domains/info/pages/about/about.component.js';
import { NotFoundComponent } from '@shared/pages/not-found/not-found.component.js';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component.js';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
