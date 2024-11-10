import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'penaCoffeeApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'penaCoffeeApp.product.home.title' },
    loadChildren: () => import('./product/product.routes'),
  },
  {
    path: 'customer',
    data: { pageTitle: 'penaCoffeeApp.customer.home.title' },
    loadChildren: () => import('./customer/customer.routes'),
  },
  {
    path: 'order',
    data: { pageTitle: 'penaCoffeeApp.order.home.title' },
    loadChildren: () => import('./order/order.routes'),
  },
  {
    path: 'order-item',
    data: { pageTitle: 'penaCoffeeApp.orderItem.home.title' },
    loadChildren: () => import('./order-item/order-item.routes'),
  },
  {
    path: 'payment',
    data: { pageTitle: 'penaCoffeeApp.payment.home.title' },
    loadChildren: () => import('./payment/payment.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
