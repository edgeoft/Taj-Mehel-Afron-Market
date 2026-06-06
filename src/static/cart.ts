import { images } from '@/assets';
import { TCartData } from '@/types/cart';
import { TBreadCrumb } from '@/types/generic';

export const cartBreadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  {
    id: '3',
    title: 'My Cart',
  },
];

export const cartData: TCartData[] = [
  {
    seller: 'Krishna Furniture',
    deliveryCharge: 1000,
    items: [
      {
        name: 'Handcrafted designer sofa for your home',
        image: images.productImgOne,
        size: '13 X 24',
        stock: 20,
        price: 5000,
        quantity: 10,
      },
      {
        name: 'Handcrafted designer sofa for your home',
        image: images.productImgTwo,
        size: '13 X 24',
        stock: 0,
        price: 600,
        quantity: 10,
      },
      {
        name: 'Handcrafted designer sofa for your home',
        image: images.productImgThree,
        size: '13 X 24',
        stock: 10,
        price: 300,
        quantity: 2,
      },
    ],
  },
  {
    seller: 'Sundar Furniture',
    deliveryCharge: 1000,
    items: [
      {
        name: 'Handcrafted designer sofa for your home',
        image: images.productImgFour,
        size: '13 X 24',
        stock: 10,
        price: 20,
        quantity: 8,
      },
      {
        name: 'Handcrafted designer sofa for your home',
        image: images.productImgFive,
        size: '13 X 24',
        stock: 4,
        price: 100,
        quantity: 6,
      },
    ],
  },
];
