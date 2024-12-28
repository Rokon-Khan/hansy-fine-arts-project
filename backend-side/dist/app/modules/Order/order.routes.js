"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/', order_controller_1.OrderController.createOrder);
router.get('/', order_controller_1.OrderController.getAllOrderData);
router.get('/customer/:id', order_controller_1.OrderController.getOrderByCustomerID);
router.get('/:id', order_controller_1.OrderController.getSingleOrderData);
router.patch('/:id', order_controller_1.OrderController.updateOrderData);
router.delete('/:id', order_controller_1.OrderController.deleteOrder);
exports.OrderRoutes = router;
