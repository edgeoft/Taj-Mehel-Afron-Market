import { images } from '@/assets';
import { Order } from '@/types/order';

export const ORDER_STATUS = [
  { id: 1, label: 'All', value: 'all' },
  { id: 2, label: 'Completed Orders', value: 'completed-orders' },
  { id: 3, label: 'Cancelled Orders', value: 'cancelled-orders' },
];

export const orders: Order[] = [
  {
    id: 1,
    orderId: '20222',
    createdAt: '2025-05-30 19:51:37',
    status: 'Pending',
    items: 4,
    total: '54.00',
  },
  {
    id: 2,
    orderId: '20422',
    createdAt: '2025-05-28 14:20:00',
    status: 'Processed',
    items: 6,
    total: '72.50',
  },
  {
    id: 3,
    orderId: '20423',
    createdAt: '2025-05-25 11:15:00',
    status: 'Processed',
    items: 3,
    total: '28.99',
  },
  {
    id: 4,
    orderId: '20429',
    createdAt: '2025-05-20 09:51:37',
    status: 'Cancelled',
    items: 2,
    total: '15.00',
  },
  {
    id: 5,
    orderId: '20430',
    createdAt: '2025-05-18 16:30:00',
    status: 'Completed',
    items: 8,
    total: '89.00',
  },
  {
    id: 6,
    orderId: '20225',
    createdAt: '2025-05-15 19:51:37',
    status: 'Pending',
    items: 4,
    total: '42.00',
  },
  {
    id: 7,
    orderId: '20426',
    createdAt: '2025-05-12 14:20:00',
    status: 'Processed',
    items: 5,
    total: '38.50',
  },
  {
    id: 8,
    orderId: '20427',
    createdAt: '2025-05-10 11:15:00',
    status: 'Processed',
    items: 3,
    total: '22.99',
  },
  {
    id: 9,
    orderId: '20431',
    createdAt: '2025-05-08 09:51:37',
    status: 'Cancelled',
    items: 1,
    total: '8.00',
  },
  {
    id: 10,
    orderId: '20432',
    createdAt: '2025-05-05 16:30:00',
    status: 'Completed',
    items: 10,
    total: '95.00',
  },
];

export const orderDetail = {
  id: 1,
  orderId: 20001,
  orderItems: [
    {
      sellerName: 'Taj Mehal Afro-Asian Market',
      subTotal: 32.0,
      deliveryCharge: 4.99,
      total: 36.99,
      products: [
        {
          id: 1,
          name: 'Daawat 5 kg',
          price: 12.99,
          quantity: 2,
          total: 25.98,
          size: '5 kg',
          image: [images.productImgOne],
        },
        {
          id: 2,
          name: 'Sona Mansoori Rice 100 g',
          price: 3.49,
          quantity: 1,
          total: 3.49,
          size: '100 g',
          image: [images.productImgTwo],
        },
        {
          id: 3,
          name: 'Toor Dal 1 kg',
          price: 4.99,
          quantity: 1,
          total: 4.99,
          size: '1 kg',
          image: [images.productImgThree],
        },
      ],
    },
    {
      sellerName: 'Taj Mehal Afro-Asian Market',
      subTotal: 12.0,
      deliveryCharge: 4.99,
      total: 16.99,
      products: [
        {
          id: 1,
          name: 'Wai Wai  400 g',
          price: 2.99,
          quantity: 2,
          total: 5.98,
          size: '400 g',
          image: [images.productImgFour],
        },
        {
          id: 2,
          name: 'Amul Ghee 500 ml',
          price: 7.99,
          quantity: 1,
          total: 7.99,
          size: '500 ml',
          image: [images.productImgSeven],
        },
      ],
    },
  ],
};
