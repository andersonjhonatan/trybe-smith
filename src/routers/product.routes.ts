import express from 'express';
import ProductsController from '../Controller/Products.Controller';

const router = express.Router();

router.post('/products', ProductsController.postProduct);
router.get('/products', ProductsController.getAllProductController);

export default router;