import { Request, Response } from 'express';
import OrderService from '../Service/Order.service';

const getAllOrdersController = async (_req: Request, res:Response): Promise<Response> => {
  const result = await OrderService.getAllOrders();
  return res.status(200).json(result.data);
};

export default { getAllOrdersController };