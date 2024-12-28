"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const errorMessage_1 = __importDefault(require("../../generators/errorMessage"));
const notFoundMessage_1 = __importDefault(require("../../generators/notFoundMessage"));
const successMessage_1 = __importDefault(require("../../generators/successMessage"));
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const saveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParseData = product_validation_1.default.saveProductValidationSchema.parse(req.body);
        const result = yield product_service_1.ProductServices.savingProductToDB(req.body);
        const message = `Product created successfully`;
        res.status(200).json((0, successMessage_1.default)(message, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getAllProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    // Making the query case insensitive
    const finalQuery = {};
    for (const key in query) {
        finalQuery[key] = { $regex: query[key], $options: 'i' };
    }
    console.log(finalQuery);
    try {
        const result = yield product_service_1.ProductServices.getAllProductDataFromDB(finalQuery);
        res.status(200).json((0, successMessage_1.default)(`Products retrieved successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(id);
        if (result == null) {
            res.status(404).json((0, notFoundMessage_1.default)(`Product not found`));
        }
        else {
            res.status(200).json((0, successMessage_1.default)(`Product retrieved successfully`, result));
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const updateSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const zodParseData = product_validation_1.default.updateProductValidationSchema.parse(data);
        const result = yield product_service_1.ProductServices.updateSingleProductFromDB(id, zodParseData);
        res.status(200).json((0, successMessage_1.default)(`Product updated successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const deleteProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let result = yield product_service_1.ProductServices.deleteProductFromDB(id);
        res.status(200).json((0, successMessage_1.default)('Product deleted successfully', result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
exports.ProductController = {
    saveProduct,
    getAllProductData,
    getSingleProductData,
    updateSingleProductData,
    deleteProductData,
};
