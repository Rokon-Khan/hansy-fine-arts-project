import { RequestHandler } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateNotFoundMessage from '../../generators/notFoundMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { UserServices } from './user.service';
import UserValidationSchemas from './user.validation';

const createUser: RequestHandler = async (req, res) => {
	try {
		const zodParseData =
			UserValidationSchemas.saveUserValidationSchema.parse(req.body);

		const result = await UserServices.saveUserToDB(zodParseData);
		const message: string = `User created successfully`;
		res.status(200).json(generateSuccessMessage(message, result));
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getAllUser: RequestHandler = async (req, res) => {
	try {
		const result = await UserServices.getAllUserDataFromDB();
		res.status(200).json(
			generateSuccessMessage(`Users retrieved successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const getSingleUserData: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await UserServices.getSingleUserFromDB(id);
		if (result == null) {
			res.status(404).json(generateNotFoundMessage(`User not found`));
		} else {
			res.status(200).json(
				generateSuccessMessage(`User retrieved successfully`, result),
			);
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const updateUserData: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;

		const zodParseData =
			UserValidationSchemas.updateUserValidationSchema.parse(data);
		const result = await UserServices.updateUserToDB(id, zodParseData);
		res.status(200).json(
			generateSuccessMessage(`User updated successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const deleteUser: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;

		let result: any = await UserServices.deleteUserFromDB(id);
		res.status(200).json(
			generateSuccessMessage('User deleted successfully', result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

export const UserController = {
	createUser,
	getAllUser,
	getSingleUserData,
	updateUserData,
	deleteUser,
};
