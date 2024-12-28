import { z } from 'zod';

const saveOrderValidationSchema = z.object({
	quantity: z.number({
		required_error: 'Quantity is required',
		invalid_type_error: 'Quantity must be a number',
	}),
	status: z.string({
		required_error: 'Status is required',
		invalid_type_error: 'Status must be a string',
	}),
	totalPrice: z.number({
		required_error: 'Total Price is required',
		invalid_type_error: 'Total Price must be a number',
	}),
});

const updateOrderValidationSchema = saveOrderValidationSchema.partial();

export const orderValidationSchemas = {
	saveOrderValidationSchema,
	updateOrderValidationSchema,
};
