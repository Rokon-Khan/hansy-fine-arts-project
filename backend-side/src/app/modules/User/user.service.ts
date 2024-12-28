import { IUser } from './user.interfaces';
import { User } from './user.model';

const saveUserToDB = async (payload: IUser) => {
	const result = await User.create(payload);
	return result;
};

const getAllUserDataFromDB = async () => {
	const result = await User.find();
	return result;
};

const getSingleUserFromDB = async (id: string) => {
	const result = await User.findById(id);
	return result;
};

const updateUserToDB = async (id: string, payload: Partial<IUser>) => {
	const result = await User.findByIdAndUpdate(id, payload, { new: true });
};

const deleteUserFromDB = async (id: string) => {
	const result = await User.findByIdAndDelete(id);
	return result;
};

export const UserServices = {
	saveUserToDB,
	getAllUserDataFromDB,
	getSingleUserFromDB,
	updateUserToDB,
	deleteUserFromDB,
};
