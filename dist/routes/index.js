"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_route_1 = require("../modules/Products/products.route");
const orders_route_1 = require("../modules/Orders/orders.route");
const router = (0, express_1.Router)();
const moduleRouter = [
    {
        path: '/products',
        route: products_route_1.ProductRoutes,
    },
    {
        path: '/orders',
        route: orders_route_1.OrderRoutes,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
