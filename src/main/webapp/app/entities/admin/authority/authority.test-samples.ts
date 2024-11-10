import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b12a36b8-491c-4f04-91ea-c9da4fe37b8b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c631e0f4-5d7d-4231-bf48-581cc9747e87',
};

export const sampleWithFullData: IAuthority = {
  name: '637b5bbd-1597-4675-b9e8-cf1daa9599cf',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
