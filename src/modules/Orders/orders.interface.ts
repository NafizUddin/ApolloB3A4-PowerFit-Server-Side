import { Types } from 'mongoose';

export type TOrders = {
  name: string;
  email: string;
  address: string;
  phone: string;
  delivery: string;
  products: Types.ObjectId[];
};
