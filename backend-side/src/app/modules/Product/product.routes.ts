import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.saveProduct);
router.get('/', ProductController.getAllProductData);
router.get('/:id', ProductController.getSingleProductData);
router.patch('/:id', ProductController.updateSingleProductData);
router.delete('/:id', ProductController.deleteProductData);

export const ProductRoutes = router;
