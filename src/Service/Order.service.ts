import { Op } from 'sequelize';
import ProductModel from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import sequelize from '../database/models/index';
import { ServiceResponse } from '../types/StatusHTTP';

const getAllOrders = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const result = await OrderModel.findAll({
    attributes: [
      'id', 'userId',
      [sequelize.literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],
    ],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
      where: {
        order_id: { [Op.col]: 'Order.id' },
      },
    }],
    group: 'Order.id',
    raw: true,
    nest: true,
  });

  return { status: 'SUCCESS', data: result };
};

export default { getAllOrders };
