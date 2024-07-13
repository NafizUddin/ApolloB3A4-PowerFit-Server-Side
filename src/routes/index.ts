import { Router } from 'express';
import { ProductRoutes } from '../modules/Products/products.route';
import { OrderRoutes } from '../modules/Orders/orders.route';

const router = Router();

const moduleRouter = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
