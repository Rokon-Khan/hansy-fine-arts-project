"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    stockList: {
        type: [String],
        default: null,
    },
    SKU: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
