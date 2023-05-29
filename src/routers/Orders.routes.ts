import express from 'express';
import OrdesController from '../Controller/Orders.controller';

const OrdersRouter = express.Router();

OrdersRouter.get('/orders', OrdesController.getAllOrdersController);

export default OrdersRouter;