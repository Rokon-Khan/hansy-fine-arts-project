import { Request, Response } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateNotFoundMessage from '../../generators/notFoundMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { ProductServices } from './product.service';
import ProductValidationSchemas from './product.validation';

const saveProduct = async (req: Request, res: Response) => {
	try {
		const zodParseData =
			ProductValidationSchemas.saveProductValidationSchema.parse(
				req.body,
			);

		const result = await ProductServices.savingProductToDB(req.body);
		const message: string = `Product created successfully`;
		res.status(200).json(generateSuccessMessage(message, result));
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getAllProductData = async (req: Request, res: Response) => {
	const query = req.query;

	// Making the query case insensitive
	const finalQuery: any = {};
	for (const key in query) {
		finalQuery[key] = { $regex: query[key], $options: 'i' };
	}
	console.log(finalQuery);

	try {
		const result =
			await ProductServices.getAllProductDataFromDB(finalQuery);
		res.status(200).json(
			generateSuccessMessage(`Products retrieved successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getSingleProductData = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const result = await ProductServices.getSingleProductFromDB(id);
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

const updateSingleProductData = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const data = req.body;

		const zodParseData =
			ProductValidationSchemas.updateProductValidationSchema.parse(data);
		const result = await ProductServices.updateSingleProductFromDB(
			id,
			zodParseData,
		);
		res.status(200).json(
			generateSuccessMessage(`Product updated successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const deleteProductData = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;

		let result: any = await ProductServices.deleteProductFromDB(id);
		res.status(200).json(
			generateSuccessMessage('Product deleted successfully', result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

export const ProductController = {
	saveProduct,
	getAllProductData,
	getSingleProductData,
	updateSingleProductData,
	deleteProductData,
};
