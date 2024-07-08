import { Router } from 'express';

const router = Router();

const moduleRouter = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
