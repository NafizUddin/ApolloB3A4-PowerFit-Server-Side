import { model, Schema } from 'mongoose';
import { TOrders } from './orders.interface';

const orderSchema = new Schema<TOrders>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],
});

export const Order = model<TOrders>('Order', orderSchema);
