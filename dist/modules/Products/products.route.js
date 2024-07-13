"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const products_validation_1 = require("./products.validation");
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(products_validation_1.ProductValidations.createProductValidationSchema), products_controller_1.productControllers.createProducts);
router.get('/:id', products_controller_1.productControllers.getSingleProduct);
router.put('/:id', (0, validateRequest_1.default)(products_validation_1.ProductValidations.updateProductValidationSchema), products_controller_1.productControllers.updateProduct);
router.delete('/:id', products_controller_1.productControllers.deleteProduct);
router.get('/', products_controller_1.productControllers.getAllProducts);
exports.ProductRoutes = router;
