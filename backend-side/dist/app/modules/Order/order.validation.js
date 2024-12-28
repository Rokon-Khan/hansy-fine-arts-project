"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchemas = void 0;
const zod_1 = require("zod");
const saveOrderValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number({
        required_error: 'Quantity is required',
        invalid_type_error: 'Quantity must be a number',
    }),
    status: zod_1.z.string({
        required_error: 'Status is required',
        invalid_type_error: 'Status must be a string',
    }),
    totalPrice: zod_1.z.number({
        required_error: 'Total Price is required',
        invalid_type_error: 'Total Price must be a number',
    }),
});
const updateOrderValidationSchema = saveOrderValidationSchema.partial();
exports.orderValidationSchemas = {
    saveOrderValidationSchema,
    updateOrderValidationSchema,
};
