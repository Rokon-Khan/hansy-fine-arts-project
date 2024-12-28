"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const saveUserValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    }),
    password: zod_1.z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
    }),
    email: zod_1.z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }),
    role: zod_1.z.string({
        required_error: 'Role is required',
        invalid_type_error: 'Role must be a string',
    }),
    date: zod_1.z.string({
        required_error: 'Date is required',
        invalid_type_error: 'Date must be a string',
    }),
    photoURL: zod_1.z.string({
        required_error: 'Photo URL is required',
        invalid_type_error: 'Photo URL must be a string',
    }),
});
const updateUserValidationSchema = saveUserValidationSchema.deepPartial();
const UserValidationSchemas = {
    saveUserValidationSchema,
    updateUserValidationSchema,
};
exports.default = UserValidationSchemas;
