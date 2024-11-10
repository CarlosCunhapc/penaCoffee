import dayjs from 'dayjs/esm';

import { IPayment, NewPayment } from './payment.model';

export const sampleWithRequiredData: IPayment = {
  id: 22443,
  paymentDate: dayjs('2024-11-09T11:47'),
  amount: 4512.08,
  paymentMethod: 'CASH',
};

export const sampleWithPartialData: IPayment = {
  id: 31266,
  paymentDate: dayjs('2024-11-09T02:03'),
  amount: 9932.57,
  paymentMethod: 'CREDIT_CARD',
};

export const sampleWithFullData: IPayment = {
  id: 14207,
  paymentDate: dayjs('2024-11-09T21:08'),
  amount: 10104.97,
  paymentMethod: 'PAYPAL',
};

export const sampleWithNewData: NewPayment = {
  paymentDate: dayjs('2024-11-09T10:30'),
  amount: 26493.11,
  paymentMethod: 'CASH',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
