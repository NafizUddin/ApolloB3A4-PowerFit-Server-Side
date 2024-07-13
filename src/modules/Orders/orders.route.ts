import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidations } from './orders.validation';
import { OrderControllers } from './orders.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
);

router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;
