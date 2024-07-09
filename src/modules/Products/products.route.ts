import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './products.validation';
import { productControllers } from './products.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidations.createProductValidationSchema),
  productControllers.createProducts,
);

router.get('/:id', productControllers.getSingleProduct);

router.put(
  '/:id',
  validateRequest(ProductValidations.updateProductValidationSchema),
  productControllers.updateProduct,
);

router.delete('/:id', productControllers.deleteProduct);

router.get('/', productControllers.getAllProducts);

export const ProductRoutes = router;
