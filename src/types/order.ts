import { Product } from './product';

export type Order = {
  id: number;
  orderId: string;
  createdAt: string;
  status: ORDER_STATUS;
  items: number;
  total: string;
};

export type ORDER_STATUS = 'Pending' | 'Processed' | 'Completed' | 'Cancelled';

export type OrderItemType = Omit<
  Product,
  | 'category'
  | 'rating'
  | 'discountPercent'
  | 'noOfRating'
  | 'description'
  | 'price'
> & {
  size?: string;
  storage?: string;
  price: number;
  total: number;
  quantity: number;
};
