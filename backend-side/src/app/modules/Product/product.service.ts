import { IProduct } from './product.interfaces';
import { Product } from './product.model';

const savingProductToDB = async (product: IProduct) => {
	const result = await Product.create(product);
	return result;
};

const getAllProductDataFromDB = async (terms: {} | null) => {
	const result = await Product.find(terms || {}).populate('owner');
	return result;
};

const getSingleProductFromDB = async (id: string) => {
	const result = await Product.findById(id).populate('owner');
	return result;
};

const updateSingleProductFromDB = async (
	id: string,
	data: Partial<IProduct>,
) => {
	const result = await Product.findByIdAndUpdate(id, data, { new: true });
	return result;
};

const deleteProductFromDB = async (id: string) => {
	const result = await Product.findByIdAndDelete(id);
	return result;
};

export const ProductServices = {
	savingProductToDB,
	getAllProductDataFromDB,
	getSingleProductFromDB,
	updateSingleProductFromDB,
	deleteProductFromDB,
};
