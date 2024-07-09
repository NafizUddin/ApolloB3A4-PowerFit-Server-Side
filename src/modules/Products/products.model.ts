import { model, Schema } from 'mongoose';
import { IProduct, ProductModel } from './products.interface';

const productSchema = new Schema<IProduct, ProductModel>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be a positive number'],
    },
    stockQuantity: {
      type: Number,
      required: [true, 'Stock quantity is required'],
      min: [0, 'Stock quantity must be a non-negative integer'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    image: {
      type: String,
      required: [true, 'Product image URL is required'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.statics.isProductExists = async function (
  name: string,
  description: string,
  price: number,
) {
  return await Product.findOne({ name, price, description });
};

export const Product = model<IProduct, ProductModel>('Product', productSchema);
