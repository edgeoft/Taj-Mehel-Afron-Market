import { TNavbarMegaMenuItem } from '@/types/navbar';

export const NAVBAR_DUMMY_OPT = [
  {
    label: 'Option One',
    value: 'opt1',
  },
  {
    label: 'Option Two',
    value: 'opt2',
  },
  {
    label: 'Option Three',
    value: 'opt3',
  },
];

export const PROFILE_POPOVER_OPTIONS = [
  {
    label: 'My Profile',
    link: 'my-profile',
    icon: 'user',
  },
  {
    label: 'My Address',
    link: 'my-address',
    icon: 'map-pin',
  },
  {
    label: 'My Orders',
    link: 'my-orders',
    icon: 'package',
  },
  {
    label: 'Favourites',
    link: 'favourites',
    icon: 'heart',
  },
  {
    label: 'Logout',
    icon: 'signout',
  },
];

export const NAVBAR_MEGA_MENU: TNavbarMegaMenuItem[] = [
  {
    title: 'Electronics',
    slug: 'electronics',
    subCategories: [
      { title: 'Home Appliances' },
      { title: 'Entertainment' },
      { title: 'Computers & Laptops' },
      { title: 'Mobiles & Tablets' },
      { title: 'Audio & Headphones' },
      { title: 'Cameras & Photography' },
      { title: 'Gaming & Consoles' },
      { title: 'Smart Home Devices' },
      { title: 'Wearable Technology' },
      { title: 'Personal Care & Grooming' },
      { title: 'Office Electronics' },
    ],
  },
  {
    title: 'Furnitures',
    slug: 'furnitures',
    subCategories: [
      { title: 'Home Appliance' },
      { title: 'Entertainments' },
      { title: 'Computers & Laptops' },
      { title: 'Mobiles & Tablets' },
      { title: 'Audio & Headphones' },
      { title: 'Cameras & Photography' },
      { title: 'Gaming & Consoles' },
      { title: 'Smart Home Devices' },
      { title: 'Wearable Technology' },
      { title: 'Personal Care & Grooming' },
      { title: 'Office Electronics' },
    ],
  },
  {
    title: `Men's Wear`,
    slug: 'mens-wear',
    subCategories: [
      { title: 'Home Appliances' },
      { title: 'Entertainment' },
      { title: 'Computers & Laptops' },
      { title: 'Mobiles & Tablets' },
      { title: 'Audio & Headphones' },
      { title: 'Cameras & Photography' },
      { title: 'Gaming & Consoles' },
      { title: 'Smart Home Devices' },
      { title: 'Wearable Technology' },
      { title: 'Personal Care & Grooming' },
      { title: 'Office Electronics' },
    ],
  },
  {
    title: `Women's Wear`,
    slug: 'womens-wear',
    subCategories: [
      { title: 'Home Appliances' },
      { title: 'Entertainment' },
      { title: 'Computers & Laptops' },
      { title: 'Mobiles & Tablets' },
      { title: 'Audio & Headphones' },
      { title: 'Cameras & Photography' },
      { title: 'Gaming & Consoles' },
      { title: 'Smart Home Devices' },
      { title: 'Wearable Technology' },
      { title: 'Personal Care & Grooming' },
      { title: 'Office Electronics' },
    ],
  },
];

export const restrictedBottomNavRoutes = [
  '/products',
  /^\/products\/.*/,
  /^\/accounts\/.*/,
];
