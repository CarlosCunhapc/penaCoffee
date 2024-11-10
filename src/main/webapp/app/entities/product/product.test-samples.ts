import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 32124,
  name: 'given virtual',
  price: 19722.76,
  stock: 6650,
  productType: 'SNACK',
};

export const sampleWithPartialData: IProduct = {
  id: 2037,
  name: 'boohoo oh',
  description: 'blah',
  price: 30091.87,
  stock: 20205,
  productType: 'SNACK',
};

export const sampleWithFullData: IProduct = {
  id: 13819,
  name: 'sentimental fancy',
  description: 'favorable plus',
  price: 21248.8,
  stock: 17370,
  productType: 'SNACK',
};

export const sampleWithNewData: NewProduct = {
  name: 'storage',
  price: 15373.08,
  stock: 295,
  productType: 'GROUND',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
