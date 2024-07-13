"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../errors/appError"));
const products_model_1 = require("./products.model");
const QueryBuilder_1 = __importDefault(require("../../queryBuilder/QueryBuilder"));
const products_constant_1 = require("./products.constant");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield products_model_1.Product.isProductExists(payload === null || payload === void 0 ? void 0 : payload.name, payload === null || payload === void 0 ? void 0 : payload.description)) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, 'Product already exists!');
    }
    const result = yield products_model_1.Product.create(payload);
    return result;
});
const getAllProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productQuery = new QueryBuilder_1.default(products_model_1.Product.find(), query)
        .search(products_constant_1.productSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    // const meta = await productQuery.countTotal();
    const result = yield productQuery.modelQuery;
    if (result.length === 0) {
        return null;
    }
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleProduct = yield products_model_1.Product.findById(id);
    if (singleProduct === null || singleProduct === void 0 ? void 0 : singleProduct.isDeleted) {
        return null;
    }
    else {
        return singleProduct;
    }
});
const updateProductIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndUpdate(id, {
        isDeleted: true,
    }, {
        new: true,
    });
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
