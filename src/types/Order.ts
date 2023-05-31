export type Order = {
  id: number;
  userId: number;
  productIds?: number[]
};

export type OrderProducts = {
  id: number;
  userId: number;
  productIds: {
    id: number;
  } | number[];
};