export type TCartItem = {
  name: string;
  image: any;
  size: string;
  stock: number;
  price: number;
  quantity: number;
};

export type TCartData = {
  seller: string;
  deliveryCharge: number;
  items: TCartItem[];
};
