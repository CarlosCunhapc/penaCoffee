import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23268,
  login: 'Y',
};

export const sampleWithPartialData: IUser = {
  id: 4347,
  login: '|**y@V4\\Q4q9O\\Hntu\\+VWUwe\\{9gC',
};

export const sampleWithFullData: IUser = {
  id: 21435,
  login: 'oh69u@g7BV',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
