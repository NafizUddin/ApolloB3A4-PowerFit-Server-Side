"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Product name is required',
            invalid_type_error: 'Product name must be a string',
        })
            .trim(),
        price: zod_1.z.number().min(0, 'Price cannot be negative'),
        stockQuantity: zod_1.z.number().int().positive('Quantity cannot be negative'),
        description: zod_1.z
            .string({
            required_error: 'Product description is required',
            invalid_type_error: 'Product description must be a string',
        })
            .trim(),
        image: zod_1.z.string(),
        benefits: zod_1.z.string({
            required_error: 'Product benefits is required',
            invalid_type_error: 'Product benefits must be a string',
        }),
        category: zod_1.z
            .string({
            required_error: 'Product category is required',
            invalid_type_error: 'Product category must be a string',
        })
            .trim(),
    }),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Product name is required',
            invalid_type_error: 'Product name must be a string',
        })
            .trim()
            .optional(),
        price: zod_1.z.number().min(0, 'Price cannot be negative').optional(),
        stockQuantity: zod_1.z
            .number()
            .int()
            .positive('Quantity cannot be negative')
            .optional(),
        description: zod_1.z
            .string({
            required_error: 'Product description is required',
            invalid_type_error: 'Product description must be a string',
        })
            .trim()
            .optional(),
        image: zod_1.z.string().optional(),
        benefits: zod_1.z
            .string({
            required_error: 'Product benefits is required',
            invalid_type_error: 'Product benefits must be a string',
        })
            .optional(),
        category: zod_1.z
            .string({
            required_error: 'Product category is required',
            invalid_type_error: 'Product category must be a string',
        })
            .trim()
            .optional(),
    }),
});
exports.ProductValidations = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
