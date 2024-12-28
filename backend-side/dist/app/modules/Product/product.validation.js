"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const saveProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    }),
    description: zod_1.z.string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    }),
    photoUrl: zod_1.z.string({
        required_error: 'Photo URL is required.',
        invalid_type_error: 'Photo URL must be a string.',
    }),
    price: zod_1.z.number({
        required_error: 'Price is required.',
        invalid_type_error: 'Price must be a Number.',
    }),
    rating: zod_1.z.number({
        required_error: 'Rating is required.',
        invalid_type_error: 'Price must be a Number.',
    }),
    category: zod_1.z.string({
        required_error: 'Category is required.',
        invalid_type_error: 'Category must be a string',
    }),
    discount: zod_1.z.number({
        required_error: 'Discount is required.',
        invalid_type_error: 'Discount must be a number',
    }),
    SKU: zod_1.z.string({
        required_error: 'SKU is required.',
        invalid_type_error: 'SKU must be a string',
    }),
});
const updateProductValidationSchema = saveProductValidationSchema.deepPartial();
const ProductValidationSchemas = {
    saveProductValidationSchema,
    updateProductValidationSchema,
};
exports.default = ProductValidationSchemas;
