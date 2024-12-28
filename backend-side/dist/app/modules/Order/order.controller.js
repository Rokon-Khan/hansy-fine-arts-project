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
exports.OrderController = void 0;
const errorMessage_1 = __importDefault(require("../../generators/errorMessage"));
const notFoundMessage_1 = __importDefault(require("../../generators/notFoundMessage"));
const successMessage_1 = __importDefault(require("../../generators/successMessage"));
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParseData = order_validation_1.orderValidationSchemas.saveOrderValidationSchema.parse(req.body);
        const result = yield order_service_1.OrderServices.saveOrderToDB(req.body);
        const message = `Order created successfully`;
        res.status(200).json((0, successMessage_1.default)(message, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getAllOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrderDataFromDB();
        res.status(200).json((0, successMessage_1.default)(`Orders retrieved successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const getSingleOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield order_service_1.OrderServices.getSingleOrderFromDB(id);
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
const getOrderByCustomerID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield order_service_1.OrderServices.getOrderByCustomerID(id);
        res.status(200).json((0, successMessage_1.default)(`Customer Orders retrieved successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const updateOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const zodParseData = order_validation_1.orderValidationSchemas.updateOrderValidationSchema.parse(data);
        const result = yield order_service_1.OrderServices.updateOrderFromDB(id, data);
        res.status(200).json((0, successMessage_1.default)(`Order updated successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let result = yield order_service_1.OrderServices.deleteOrderFromDB(id);
        res.status(200).json((0, successMessage_1.default)('Order deleted successfully', result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
exports.OrderController = {
    createOrder,
    getAllOrderData,
    getSingleOrderData,
    getOrderByCustomerID,
    updateOrderData,
    deleteOrder,
};
