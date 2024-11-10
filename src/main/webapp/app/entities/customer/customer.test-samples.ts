import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 8610,
  firstName: 'Clare',
  lastName: 'Russel',
  email: 'r_%7uh@pwtv.\\gfvyc',
};

export const sampleWithPartialData: ICustomer = {
  id: 11988,
  firstName: 'Mossie',
  lastName: 'Rolfson',
  email: 'we.n@lv\\Grwxw',
};

export const sampleWithFullData: ICustomer = {
  id: 26562,
  firstName: 'Jo',
  lastName: 'Hudson',
  email: '6ruwu@7ab28i\\gktnq',
  phoneNumber: 'abnormally sheepishly',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Thomas',
  lastName: 'Lebsack',
  email: 'ht5f%@at3yj5\\qyx',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
