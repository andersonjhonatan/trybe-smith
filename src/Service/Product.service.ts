import { Product } from '../types/Product';
import { ServiceResponse } from '../types/StatusHTTP';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const validationsParams = ({ name, price }: ProductInputtableTypes): string | null => {
  if (!name) return '"name" is required';
  if (!price) return '"price" is required';
  return null;
};

const validationsMustBeString = ({
  name,
  price,
}: ProductInputtableTypes): string | null => {
  if (typeof name !== 'string') return '"name" must be a string';
  if (name.length <= 2) return '"name" length must be at least 3 characters long';
  if (typeof price !== 'string') return '"price" must be a string';
  if (price.length <= 2) return '"price" length must be at least 3 characters long';
  return null;
};

const productCreate = async (
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const mustBeString = validationsMustBeString(product);
  const result = validationsParams(product);

  if (result) {
    return { status: 'INVALID_DATA', data: { message: result } };
  }

  if (mustBeString) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: mustBeString } };
  }

  const newProductCreate = await ProductModel.create(product);

  return { status: 'SUCCESS', data: newProductCreate.dataValues };
};

const getAllProduct = async (): Promise<Product[]> => {
  const getallProducts = await ProductModel.findAll();

  const newResult: Product[] = getallProducts.map((item) => ({
    id: item.dataValues.id,
    name: item.dataValues.name,
    price: item.dataValues.price,
    orderId: item.dataValues.orderId,
  }));

  return newResult;
};

export default {
  productCreate,
  getAllProduct,
  validationsMustBeString,
};
