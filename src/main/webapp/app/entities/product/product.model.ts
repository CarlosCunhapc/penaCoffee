import { ProductType } from 'app/entities/enumerations/product-type.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  stock?: number | null;
  productType?: keyof typeof ProductType | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
