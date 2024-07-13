"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidations = void 0;
const zod_1 = require("zod");
const createOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'User name is required',
            invalid_type_error: 'User name must be a string',
        })
            .trim(),
        email: zod_1.z.string().email({ message: 'Invalid email address' }),
        address: zod_1.z
            .string({
            required_error: 'User address is required',
            invalid_type_error: 'User address must be a string',
        })
            .trim(),
        phone: zod_1.z
            .string({
            required_error: 'User phone number is required',
            invalid_type_error: 'User phone number must be a string',
        })
            .trim(),
        delivery: zod_1.z
            .string({
            required_error: 'User delivery address is required',
            invalid_type_error: 'User delivery address must be a string',
        })
            .trim(),
        products: zod_1.z.array(zod_1.z.string()),
    }),
});
exports.OrderValidations = {
    createOrderValidationSchema,
};
