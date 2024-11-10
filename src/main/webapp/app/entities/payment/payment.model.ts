import dayjs from 'dayjs/esm';
import { IOrder } from 'app/entities/order/order.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

export interface IPayment {
  id: number;
  paymentDate?: dayjs.Dayjs | null;
  amount?: number | null;
  paymentMethod?: keyof typeof PaymentMethod | null;
  order?: Pick<IOrder, 'id'> | null;
}

export type NewPayment = Omit<IPayment, 'id'> & { id: null };
