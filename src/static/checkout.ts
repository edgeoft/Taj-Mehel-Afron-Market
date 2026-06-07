import { TCartItem } from '@/types/cart';
import { TBreadCrumb } from '@/types/generic';
import { cartData } from './cart';

export const checkoutBreadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  { id: '2', title: 'My Cart', href: '/my-cart' },
  { id: '3', title: 'Checkout' },
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
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    streetAddress: 'Mannerheimintie 12',
    city: 'Helsinki',
    phoneCode: '+358',
    phoneNumber: '401234567',
    state: 'Uusimaa',
    zipCode: '00100',
    isDefault: true,
    companyName: '',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@gmail.com',
    streetAddress: 'Otaniementie 5',
    city: 'Espoo',
    phoneCode: '+358',
    phoneNumber: '501234567',
    state: 'Uusimaa',
    zipCode: '02150',
  },
  {
    id: 3,
    name: 'Anita Patel',
    email: 'anita.patel@gmail.com',
    streetAddress: 'Tikkurilantie 8',
    city: 'Vantaa',
    phoneCode: '+358',
    phoneNumber: '441234567',
    state: 'Uusimaa',
    zipCode: '01300',
  },
];

export const stateOpt = [
  { label: 'Uusimaa', value: 'Uusimaa' },
  { label: 'Helsinki', value: 'Helsinki' },
  { label: 'Espoo', value: 'Espoo' },
  { label: 'Vantaa', value: 'Vantaa' },
];

export const discountCodeOpt = [
  { label: 'NAMASTE10', desc: '10% OFF', value: 'welcome10' },
  { label: 'DIWALI20', desc: '20% OFF', value: 'diwaliOffer' },
];
