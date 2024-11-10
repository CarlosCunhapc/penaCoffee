import { IOrderItem, NewOrderItem } from './order-item.model';

export const sampleWithRequiredData: IOrderItem = {
  id: 2048,
  quantity: 12985,
  totalPrice: 24890.13,
};

export const sampleWithPartialData: IOrderItem = {
  id: 19561,
  quantity: 26881,
  totalPrice: 7855.49,
};

export const sampleWithFullData: IOrderItem = {
  id: 26577,
  quantity: 26096,
  totalPrice: 18803.21,
};

export const sampleWithNewData: NewOrderItem = {
  quantity: 16584,
  totalPrice: 13564.86,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
