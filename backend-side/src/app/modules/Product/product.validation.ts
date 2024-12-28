import { z } from 'zod';

const saveProductValidationSchema = z.object({
	name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
	description: z.string({
		required_error: 'Description is required',
		invalid_type_error: 'Description must be a string',
	}),
	photoUrl: z.string({
		required_error: 'Photo URL is required.',
		invalid_type_error: 'Photo URL must be a string.',
	}),
	price: z.number({
		required_error: 'Price is required.',
		invalid_type_error: 'Price must be a Number.',
	}),
	rating: z.number({
		required_error: 'Rating is required.',
		invalid_type_error: 'Price must be a Number.',
	}),
	category: z.string({
		required_error: 'Category is required.',
		invalid_type_error: 'Category must be a string',
	}),
	discount: z.number({
		required_error: 'Discount is required.',
		invalid_type_error: 'Discount must be a number',
	}),
	SKU: z.string({
		required_error: 'SKU is required.',
		invalid_type_error: 'SKU must be a string',
	}),
});
const updateProductValidationSchema = saveProductValidationSchema.deepPartial();

const ProductValidationSchemas = {
	saveProductValidationSchema,
	updateProductValidationSchema,
};

export default ProductValidationSchemas;
