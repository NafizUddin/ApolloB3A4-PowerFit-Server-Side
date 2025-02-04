"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const orders_validation_1 = require("./orders.validation");
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(orders_validation_1.OrderValidations.createOrderValidationSchema), orders_controller_1.OrderControllers.createOrder);
router.get('/', orders_controller_1.OrderControllers.getAllOrders);
exports.OrderRoutes = router;
