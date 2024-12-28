"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    productID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    customerID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Order = (0, mongoose_1.model)('Order', OrderSchema);
