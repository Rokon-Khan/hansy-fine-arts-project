import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrderData);
router.get('/customer/:id', OrderController.getOrderByCustomerID);
router.get('/:id', OrderController.getSingleOrderData);
router.patch('/:id', OrderController.updateOrderData);
router.delete('/:id', OrderController.deleteOrder);

export const OrderRoutes = router;
