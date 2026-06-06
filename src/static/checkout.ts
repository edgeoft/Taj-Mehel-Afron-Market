import { TCartItem } from '@/types/cart';
import { TBreadCrumb } from '@/types/generic';
import { cartData } from './cart';

export const checkoutBreadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  {
    id: '2',
    title: 'My Cart',
    href: '/my-cart',
  },
  {
    id: '3',
    title: 'Checkout',
  },
];

export const cartProductInfo = () => {
  const itemsArr: TCartItem[] = [];
  cartData.forEach((item) => {
    itemsArr.push(...item.items);
  });
  return itemsArr;
};

export const delivery = [
  {
    id: 1,
    name: 'John Doe',
    email: 'joh.doe@gmail.com',
    streetAddress: 'Kalimati',
    city: 'Kathmandu',
    phoneCode: '+1',
    phoneNumber: '9841234567',
    state: 'Bagmati',
    zipCode: '44600',
    isDefault: true,
    companyName: 'John Pvt Ltd',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'joh.doe1@gmail.com',
    streetAddress: 'Kalimati',
    city: 'Kathmandu',
    phoneCode: '+977',
    phoneNumber: '9841234567',
    state: 'Bagmati',
    zipCode: '44600',
  },
  {
    id: 3,
    name: 'Smriti Thapa',
    email: 'smriti.thapa@gmail.com',
    streetAddress: 'Syuichatar',
    city: 'Kathmandu',
    phoneCode: '+977',
    phoneNumber: '9841234567',
    state: 'Bagmati',
    zipCode: '44600',
  },
];

export const stateOpt = [
  {
    label: 'Bagmati',
    value: 'Bagmati',
  },
];

export const discountCodeOpt = [
  {
    label: 'AYODASHAIN',
    desc: '10% OFF',
    value: 'dashainOffer',
  },
  {
    label: 'AYOTIHAR',
    desc: '20% OFF',
    value: 'tiharOffer',
  },
];
