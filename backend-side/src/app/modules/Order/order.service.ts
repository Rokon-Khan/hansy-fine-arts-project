import { IOrder } from './order.interfaces';
import { Order } from './order.model';

const saveOrderToDB = async (payload: IOrder) => {
	const result = await Order.create(payload);
	return result;
};

const getAllOrderDataFromDB = async () => {
	const result = await Order.find({})
		.populate('productID')
		.populate('customerID');

	return result;
};

const getSingleOrderFromDB = async (id: string) => {
	const result = await Order.findById(id)
		.populate('productID')
		.populate('customerID');
	return result;
};

const getOrderByCustomerID = async (id: string) => {
	const result = await Order.find({ customerID: id })
		.populate('productID')
		.populate('customerID');
	return result;
};

const updateOrderFromDB = async (id: string, payload: Partial<IOrder>) => {
	const result = await Order.findByIdAndUpdate(id, payload, { new: true })
		.populate('productID')
		.populate('customerID');
	return result;
};

const deleteOrderFromDB = async (id: string) => {
	const result = await Order.findByIdAndDelete(id)
		.populate('productID')
		.populate('customerID');
	return result;
};

export const OrderServices = {
	saveOrderToDB,
	getAllOrderDataFromDB,
	getSingleOrderFromDB,
	getOrderByCustomerID,
	updateOrderFromDB,
	deleteOrderFromDB,
};
