export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productIds?: { id: number }[] | number[]
};

export type OrderProducts = {
  id: number;
  userId: number;
  productIds?: { id: number }[]
};