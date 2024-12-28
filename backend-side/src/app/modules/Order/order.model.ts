import { model, Schema } from 'mongoose';
import { IOrder } from './order.interfaces';

const OrderSchema = new Schema<IOrder>(
	{
		productID: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
		customerID: {
			type: Schema.Types.ObjectId,
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
	},
	{
		timestamps: true,
	},
);

export const Order = model<IOrder>('Order', OrderSchema);
