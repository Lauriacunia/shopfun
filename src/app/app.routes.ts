import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/pages/layout/layout.component.js';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component.js'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component.js'),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-detail/product-detail.component.js'
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./domains/shared/pages/not-found/not-found.component.js'),
  },
];
