import { z } from 'zod';

const saveUserValidationSchema = z.object({
	name: z.string({
		required_error: 'Name is required',
		invalid_type_error: 'Name must be a string',
	}),
	uid: z.string({
		required_error: 'Password is required',
		invalid_type_error: 'Password must be a string',
	}),
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string',
		})
		.email(),
});

const updateUserValidationSchema = saveUserValidationSchema.partial();

const UserValidationSchemas = {
	saveUserValidationSchema,
	updateUserValidationSchema,
};

export default UserValidationSchemas;
