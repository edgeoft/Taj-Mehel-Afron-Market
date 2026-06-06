import { images } from '@/assets';
import { Order } from '@/types/order';

export const ORDER_STATUS = [
  { id: 1, label: 'All', value: 'all' },
  { id: 2, label: 'Completed Orders', value: 'completed-orders' },
  { id: 3, label: 'Cancelled Orders', value: 'cancelled-orders' },
];

//dummy datas
export const orders: Order[] = [
  {
    id: 1,
    orderId: '20222',
    createdAt: '2024-09-30 19:51:37',
    status: 'Pending',
    items: 4,
    total: '54000',
  },
  {
    id: 2,
    orderId: '20422',
    createdAt: '2024-09-30 19:51:37',
    status: 'Processed',
    items: 4,
    total: '54000',
  },
  {
    id: 3,
    orderId: '20422',
    createdAt: '2024-09-30 19:51:37',
    status: 'Processed',
    items: 4,
    total: '54000',
  },
  {
    id: 4,
    orderId: '20429',
    createdAt: '2024-10-30 9:51:37',
    status: 'Cancelled',
    items: 4,
    total: '4000',
  },
  {
    id: 5,
    orderId: '20429',
    createdAt: '2024-10-30 9:51:37',
    status: 'Completed',
    items: 4,
    total: '4000',
  },
  {
    id: 6,
    orderId: '20222',
    createdAt: '2024-09-30 19:51:37',
    status: 'Pending',
    items: 4,
    total: '54000',
  },
  {
    id: 7,
    orderId: '20422',
    createdAt: '2024-09-30 19:51:37',
    status: 'Processed',
    items: 4,
    total: '54000',
  },
  {
    id: 8,
    orderId: '20422',
    createdAt: '2024-09-30 19:51:37',
    status: 'Processed',
    items: 4,
    total: '54000',
  },
  {
    id: 9,
    orderId: '20429',
    createdAt: '2024-10-30 9:51:37',
    status: 'Cancelled',
    items: 4,
    total: '4000',
  },
  {
    id: 10,
    orderId: '20429',
    createdAt: '2024-10-30 9:51:37',
    status: 'Completed',
    items: 4,
    total: '4000',
  },
];

export const orderDetail = {
  id: 1,
  orderId: 20001,
  orderItems: [
    {
      sellerName: 'Krishna Furniture',
      subTotal: 32000,
      deliveryCharge: 500,
      total: 32500,
      products: [
        {
          id: 1,
          name: 'Handcrafted designer sofa for your home ',
          price: 5000,
          quantity: 1,
          total: 5000,
          size: '13 * 24',
          image: [images.productImgOne],
        },
        {
          id: 2,
          name: 'Iphone 6s',
          price: 110000,
          quantity: 2,
          total: 22000,
          storage: '128GB',
          image: [images.productImgFour],
        },
        {
          id: 3,
          name: 'Winter Mens T-Shirt',
          price: 500,
          quantity: 10,
          total: 5000,
          size: 'Medium',
          image: [images.productImgFive],
        },
      ],
    },
    {
      sellerName: 'Sharma Tailors',
      subTotal: 5000,
      deliveryCharge: 500,
      total: 5500,
      products: [
        {
          id: 1,
          name: "Women's Saree",
          price: 5000,
          quantity: 1,
          total: 5000,
          size: 'Small',
          image: [images.productImgSeven],
        },
      ],
    },
  ],
};
