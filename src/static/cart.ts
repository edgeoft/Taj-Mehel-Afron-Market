import { images } from '@/assets';
import { TCartData } from '@/types/cart';
import { TBreadCrumb } from '@/types/generic';

export const cartBreadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  { id: '3', title: 'My Cart' },
];

export const cartData: TCartData[] = [
  {
    seller: 'Taj Mehal Afro-Asian Market',
    deliveryCharge: 4.99,
    items: [
      {
        name: 'Daawat 5 kg',
        image: images.productImgOne,
        size: '5 kg',
        stock: 20,
        price: 12.99,
        quantity: 2,
      },
      {
        name: 'Sona Mansoori Rice 100 g',
        image: images.productImgTwo,
        size: '100 g',
        stock: 15,
        price: 3.49,
        quantity: 1,
      },
      {
        name: 'Toor Dal 1 kg',
        image: images.productImgThree,
        size: '1 kg',
        stock: 10,
        price: 4.99,
        quantity: 2,
      },
    ],
  },
  {
    seller: 'Taj Mehal Afro-Asian Market',
    deliveryCharge: 4.99,
    items: [
      {
        name: 'Wai Wai  400 g',
        image: images.productImgFour,
        size: '400 g',
        stock: 8,
        price: 2.99,
        quantity: 3,
      },
      {
        name: 'Amul Ghee 500 ml',
        image: images.productImgFive,
        size: '500 ml',
        stock: 6,
        price: 7.99,
        quantity: 1,
      },
    ],
  },
];
