import { Types } from 'mongoose';

export interface IProduct {
	name: string;
	description: string;
	stockList?: string[] | null;
	SKU: string;
	discount: number;
	price: number;
	rating: number;
	photoUrl: string;
	category: string;
	owner: Types.ObjectId;
}
