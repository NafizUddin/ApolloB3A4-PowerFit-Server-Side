import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'User name is required',
        invalid_type_error: 'User name must be a string',
      })
      .trim(),
    email: z.string().email({ message: 'Invalid email address' }),
    address: z
      .string({
        required_error: 'User address is required',
        invalid_type_error: 'User address must be a string',
      })
      .trim(),
    phone: z
      .string({
        required_error: 'User phone number is required',
        invalid_type_error: 'User phone number must be a string',
      })
      .trim(),
    delivery: z
      .string({
        required_error: 'User delivery address is required',
        invalid_type_error: 'User delivery address must be a string',
      })
      .trim(),
    products: z.array(z.string()),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
};
