import NavbarItem from 'app/layouts/navbar/navbar-item.model';

export const EntityNavbarItems: NavbarItem[] = [
  {
    name: 'Product',
    route: '/product',
    translationKey: 'global.menu.entities.product',
  },
  {
    name: 'Customer',
    route: '/customer',
    translationKey: 'global.menu.entities.customer',
  },
  {
    name: 'Order',
    route: '/order',
    translationKey: 'global.menu.entities.order',
  },
  {
    name: 'OrderItem',
    route: '/order-item',
    translationKey: 'global.menu.entities.orderItem',
  },
  {
    name: 'Payment',
    route: '/payment',
    translationKey: 'global.menu.entities.payment',
  },
];
