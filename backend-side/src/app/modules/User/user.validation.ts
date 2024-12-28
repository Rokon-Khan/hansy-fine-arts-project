import { z } from 'zod';

const saveUserValidationSchema = z.object({
	name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
	password: z.string({
		required_error: 'Password is required',
		invalid_type_error: 'Password must be a string',
	}),
	email: z.string({
		required_error: 'Email is required',
		invalid_type_error: 'Email must be a string',
	}),
	role: z.string({
		required_error: 'Role is required',
		invalid_type_error: 'Role must be a string',
	}),
	date: z.string({
		required_error: 'Date is required',
		invalid_type_error: 'Date must be a string',
	}),
	photoURL: z.string({
		required_error: 'Photo URL is required',
		invalid_type_error: 'Photo URL must be a string',
	}),
});

const updateUserValidationSchema = saveUserValidationSchema.deepPartial();

const UserValidationSchemas = {
	saveUserValidationSchema,
	updateUserValidationSchema,
};

export default UserValidationSchemas;
