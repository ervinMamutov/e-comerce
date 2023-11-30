import express from 'express';
import productControllers from '../controllers/product.js';
const router = express.Router();

router.get('/', productControllers.getProducts);

router.get('/:id', productControllers.getProductById);

export default router;
