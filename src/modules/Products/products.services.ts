import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { IProduct } from './products.interface';
import { Product } from './products.model';

const createProductIntoDB = async (payload: IProduct) => {
  if (
    await Product.isProductExists(
      payload?.name,
      payload?.price,
      payload?.description,
    )
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product already exists!');
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();

  if (result.length === 0) {
    return null;
  }

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const singleProduct = await Product.findById(id);

  if (singleProduct?.isDeleted) {
    return null;
  } else {
    return singleProduct;
  }
};

const updateProductIntoDB = async (payload: Partial<IProduct>, id: string) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    },
  );

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
