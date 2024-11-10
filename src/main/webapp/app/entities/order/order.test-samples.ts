import dayjs from 'dayjs/esm';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 22513,
  orderDate: dayjs('2024-11-09T09:26'),
  status: 'CANCELLED',
  totalAmount: 22640.53,
};

export const sampleWithPartialData: IOrder = {
  id: 20391,
  orderDate: dayjs('2024-11-09T00:24'),
  status: 'PAID',
  totalAmount: 24364.99,
};

export const sampleWithFullData: IOrder = {
  id: 28981,
  orderDate: dayjs('2024-11-09T19:22'),
  status: 'SHIPPED',
  totalAmount: 9302.18,
};

export const sampleWithNewData: NewOrder = {
  orderDate: dayjs('2024-11-09T22:32'),
  status: 'CANCELLED',
  totalAmount: 15110.97,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
