import { Order, OrderProducts } from '../types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

const getAllOrders = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });

  const formatedOrdes = orders.map((item) => {
    const order = item.dataValues as OrderProducts;
    const productIds = order.productIds?.map((product) => product?.id);
  
    return {
      id: order.id, userId: order.userId, productIds };
  });
  return formatedOrdes;
};

export default { getAllOrders };
