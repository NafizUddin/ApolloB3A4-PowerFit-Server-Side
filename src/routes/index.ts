import { Router } from 'express';
import { ProductRoutes } from '../modules/Products/products.route';

const router = Router();

const moduleRouter = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
