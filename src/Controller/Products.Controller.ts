import { Request, Response } from 'express';
import statusHttp from '../utils/statusHttp';
import ProductService from '../Service/Product.service';

const postProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;

  const { data, status } = await ProductService.productCreate({ name, price, orderId });
  
  if (status !== 'SUCCESS') {
    return res.status(statusHttp(status)).json(data);
  }

  return res.status(201).json(data);
};

const getAllProductController = async (
  _req: Request,
  res: Response,
): Promise<Response> => {
  const result = await ProductService.getAllProduct();
  return res.status(200).json(result);
};

export default {
  postProduct,
  getAllProductController,
};
