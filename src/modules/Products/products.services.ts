import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { IProduct } from './products.interface';
import { Product } from './products.model';
import QueryBuilder from '../../queryBuilder/QueryBuilder';
import { productSearchableFields } from './products.constant';

const createProductIntoDB = async (payload: IProduct) => {
  if (await Product.isProductExists(payload?.name, payload?.description)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product already exists!');
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  // const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;

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
