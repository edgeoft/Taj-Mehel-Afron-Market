import { TNavbarMegaMenuItem } from '@/types/navbar';

export const NAVBAR_DUMMY_OPT = [
  { label: 'Vantaa', value: 'vantaa' },
  { label: 'Helsinki', value: 'helsinki' },
  { label: 'Espoo', value: 'espoo' },
  { label: 'Uusimaa', value: 'uusimaa' },
];

export const PROFILE_POPOVER_OPTIONS = [
  { label: 'My Profile', link: 'my-profile', icon: 'user' },
  { label: 'My Address', link: 'my-address', icon: 'map-pin' },
  { label: 'My Orders', link: 'my-orders', icon: 'package' },
  { label: 'Favourites', link: 'favourites', icon: 'heart' },
  { label: 'Logout', icon: 'signout' },
];

export const NAVBAR_MEGA_MENU: TNavbarMegaMenuItem[] = [
  {
    title: 'African Food',
    slug: 'african-staples',
    description:
      'Plantain, yam, cassava, egusi, injera flour and other African groceries.',
    subCategories: [
      { title: 'Plantain & Yam' },
      { title: 'Rice & Grains' },
      { title: 'Egusi & Groundnut' },
      { title: 'Spices & Seasonings' },
      { title: 'Palm Oil & Sauces' },
      { title: 'Frozen & Ready Meals' },
    ],
  },
  {
    title: 'Indian Food',
    slug: 'rice-grains',
    description:
      'Basmati rice, lentils, flour, masalas and Indian groceries for home cooking.',
    subCategories: [
      { title: 'Basmati Rice' },
      { title: 'Lentils & Pulses' },
      { title: 'Flours & Atta' },
      { title: 'Spices & Masalas' },
      { title: 'Pickles & Chutneys' },
      { title: 'Ghee & Dairy' },
    ],
  },
  {
    title: 'Asian Food',
    slug: 'asian-products',
    description:
      'Groceries from Thailand, Japan, Korea, China and the Philippines.',
    subCategories: [
      { title: 'Thai Sauces & Pastes' },
      { title: 'Japanese Noodles & Rice' },
      { title: 'Korean Kimchi & Sauces' },
      { title: 'Chinese Spices & Oils' },
      { title: 'Filipino Food' },
      { title: 'Coconut Products' },
    ],
  },
  {
    title: 'Spices & Sauces',
    slug: 'spices-masalas',
    description:
      'Whole spices, curry mixes, hot sauces and seasonings from Africa and Asia.',
    subCategories: [
      { title: 'Whole Spices' },
      { title: 'Curry & Masala Mixes' },
      { title: 'African Seasonings' },
      { title: 'Asian Sauces & Pastes' },
      { title: 'Chilli & Pepper' },
      { title: 'Cooking Oils' },
    ],
  },
  {
    title: 'Snacks & Drinks',
    slug: 'snacks-more',
    description:
      'Snacks, namkeen, tea, coffee, juices and treats from Africa and Asia.',
    subCategories: [
      { title: 'African Snacks' },
      { title: 'Namkeen & Bhujia' },
      { title: 'Asian Snacks & Noodles' },
      { title: 'Tea & Coffee' },
      { title: 'Juices & Soft Drinks' },
      { title: 'Festive Items' },
    ],
  },
  {
    title: 'Fresh Vegetables',
    slug: 'fresh-vegetables',
    description:
      'Fresh herbs, chillies, greens and vegetables from our store in Vantaa.',
    subCategories: [
      { title: 'Leafy Greens & Herbs' },
      { title: 'Root Vegetables' },
      { title: 'Tomatoes & Peppers' },
      { title: 'Onions & Garlic' },
      { title: 'Seasonal Fruits' },
      { title: 'Fresh Chillies & Ginger' },
    ],
  },
];

export const SEARCH_SUGGESTIONS = [
  { label: 'Plantain' },
  { label: 'Basmati Rice' },
  { label: 'Garam Masala' },
  { label: 'Kimchi' },
  { label: 'Palm Oil' },
  { label: 'Fresh Coriander' },
  { label: 'Coconut Milk' },
  { label: 'Egusi' },
];

export const restrictedBottomNavRoutes = [
  '/products',
  /^\/products\/.*/,
  /^\/accounts\/.*/,
];
