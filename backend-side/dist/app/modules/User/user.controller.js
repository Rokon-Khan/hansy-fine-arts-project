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
exports.UserController = void 0;
const errorMessage_1 = __importDefault(require("../../generators/errorMessage"));
const notFoundMessage_1 = __importDefault(require("../../generators/notFoundMessage"));
const successMessage_1 = __importDefault(require("../../generators/successMessage"));
const user_service_1 = require("./user.service");
const user_validation_1 = __importDefault(require("./user.validation"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParseData = user_validation_1.default.saveUserValidationSchema.parse(req.body);
        const result = yield user_service_1.UserServices.saveUserToDB(zodParseData);
        const message = `User created successfully`;
        res.status(200).json((0, successMessage_1.default)(message, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUserDataFromDB();
        res.status(200).json((0, successMessage_1.default)(`Users retrieved successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getSingleUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_service_1.UserServices.getSingleUserFromDB(id);
        if (result == null) {
            res.status(404).json((0, notFoundMessage_1.default)(`User not found`));
        }
        else {
            res.status(200).json((0, successMessage_1.default)(`User retrieved successfully`, result));
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const zodParseData = user_validation_1.default.updateUserValidationSchema.parse(data);
        const result = yield user_service_1.UserServices.updateUserToDB(id, zodParseData);
        res.status(200).json((0, successMessage_1.default)(`User updated successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let result = yield user_service_1.UserServices.deleteUserFromDB(id);
        res.status(200).json((0, successMessage_1.default)('User deleted successfully', result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
exports.UserController = {
    createUser,
    getAllUser,
    getSingleUserData,
    updateUserData,
    deleteUser,
};
