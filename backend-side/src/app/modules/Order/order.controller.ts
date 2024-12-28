import { RequestHandler } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateNotFoundMessage from '../../generators/notFoundMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { OrderServices } from './order.service';
import { orderValidationSchemas } from './order.validation';

const createOrder: RequestHandler = async (req, res) => {
	try {
		const zodParseData =
			orderValidationSchemas.saveOrderValidationSchema.parse(req.body);

		const result = await OrderServices.saveOrderToDB(req.body);
		const message: string = `Order created successfully`;
		res.status(200).json(generateSuccessMessage(message, result));
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getAllOrderData: RequestHandler = async (req, res) => {
	try {
		const result = await OrderServices.getAllOrderDataFromDB();
		res.status(200).json(
			generateSuccessMessage(`Orders retrieved successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getSingleOrderData: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await OrderServices.getSingleOrderFromDB(id);
		if (result == null) {
			res.status(404).json(generateNotFoundMessage(`Product not found`));
		} else {
			res.status(200).json(
				generateSuccessMessage(
					`Product retrieved successfully`,
					result,
				),
			);
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getOrderByCustomerID: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await OrderServices.getOrderByCustomerID(id);
		res.status(200).json(
			generateSuccessMessage(
				`Customer Orders retrieved successfully`,
				result,
			),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const updateOrderData: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;

		const zodParseData =
			orderValidationSchemas.updateOrderValidationSchema.parse(data);
		const result = await OrderServices.updateOrderFromDB(id, data);
		res.status(200).json(
			generateSuccessMessage(`Order updated successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const deleteOrder: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;

		let result: any = await OrderServices.deleteOrderFromDB(id);
		res.status(200).json(
			generateSuccessMessage('Order deleted successfully', result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

export const OrderController = {
	createOrder,
	getAllOrderData,
	getSingleOrderData,
	getOrderByCustomerID,
	updateOrderData,
	deleteOrder,
};
