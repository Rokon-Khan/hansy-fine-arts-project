import { Types } from 'mongoose';

export interface IOrder {
	productID: Types.ObjectId;
	customerID: Types.ObjectId;
	quantity: number;
	totalPrice: number;
	status: string;
}
