import { model, Schema } from 'mongoose';
import { IProduct } from './product.interfaces';

const productSchema = new Schema<IProduct>(
	{
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
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

export const Product = model<IProduct>('Product', productSchema);
