import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Product name is required',
        invalid_type_error: 'Product name must be a string',
      })
      .trim(),
    price: z.number().min(0, 'Price cannot be negative'),
    stockQuantity: z.number().int().positive('Quantity cannot be negative'),
    description: z
      .string({
        required_error: 'Product description is required',
        invalid_type_error: 'Product description must be a string',
      })
      .trim(),
    images: z.string(),
    benefits: z.string({
      required_error: 'Product benefits is required',
      invalid_type_error: 'Product benefits must be a string',
    }),
    category: z
      .string({
        required_error: 'Product category is required',
        invalid_type_error: 'Product category must be a string',
      })
      .trim(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Product name is required',
        invalid_type_error: 'Product name must be a string',
      })
      .trim()
      .optional(),
    price: z.number().min(0, 'Price cannot be negative').optional(),
    stockQuantity: z
      .number()
      .int()
      .positive('Quantity cannot be negative')
      .optional(),
    description: z
      .string({
        required_error: 'Product description is required',
        invalid_type_error: 'Product description must be a string',
      })
      .trim()
      .optional(),
    images: z.string().optional(),
    benefits: z
      .string({
        required_error: 'Product benefits is required',
        invalid_type_error: 'Product benefits must be a string',
      })
      .optional(),
    category: z
      .string({
        required_error: 'Product category is required',
        invalid_type_error: 'Product category must be a string',
      })
      .trim()
      .optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
