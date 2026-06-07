import { TNavbarMegaMenuItem } from '@/types/navbar';

export const NAVBAR_DUMMY_OPT = [
  { label: 'Helsinki', value: 'helsinki' },
  { label: 'Espoo', value: 'espoo' },
  { label: 'Vantaa', value: 'vantaa' },
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
    title: 'Rice & Grains',
    slug: 'rice-grains',
    description:
      'Premium basmati, sona masoori and everyday rice staples for your kitchen.',
    subCategories: [
      { title: 'Basmati Rice' },
      { title: 'Sona Masoori' },
      { title: 'Poha & Rava' },
      { title: 'Quinoa & Millet' },
    ],
  },
  {
    title: 'Lentils & Pulses',
    slug: 'lentils-pulses',
    description:
      'Toor, moong, chana and more — essentials for dal, sambar and curries.',
    subCategories: [
      { title: 'Toor Dal' },
      { title: 'Moong Dal' },
      { title: 'Chana Dal' },
      { title: 'Urad Dal' },
      { title: 'Rajma & Chickpeas' },
    ],
  },
  {
    title: 'Spices & Masalas',
    slug: 'spices-masalas',
    description:
      'Authentic whole spices, ground masalas and blends for Indian cooking.',
    subCategories: [
      { title: 'Whole Spices' },
      { title: 'Ground Spices' },
      { title: 'Garam Masala' },
      { title: 'Curry Powders' },
      { title: 'Spice Blends' },
    ],
  },
  {
    title: 'Snacks & More',
    slug: 'snacks-more',
    description:
      'Namkeen, pickles, chai, dairy and festive items for every occasion.',
    subCategories: [
      { title: 'Namkeen & Bhujia' },
      { title: 'Pickles & Chutneys' },
      { title: 'Beverages & Chai' },
      { title: 'Dairy & Ghee' },
      { title: 'Frozen & Ready-to-Eat' },
      { title: 'Puja & Festive Items' },
    ],
  },
  {
    title: 'Nepalese Products',
    slug: 'nepalese-products',
    description:
      'Authentic Nepali staples — gundruk, sel roti mix, dal bhat essentials and more.',
    subCategories: [
      { title: 'Gundruk & Sinki' },
      { title: 'Dal Bhat Essentials' },
      { title: 'Nepali Tea & Snacks' },
      { title: 'Achar & Pickles' },
      { title: 'Sel Roti Mix & Flours' },
      { title: 'Ghee & Dairy' },
    ],
  },
  {
    title: 'Asian Products',
    slug: 'asian-products',
    description:
      'Pan-Asian groceries — Thai, Japanese, Korean, Chinese and more.',
    subCategories: [
      { title: 'Thai Sauces & Pastes' },
      { title: 'Japanese Noodles & Rice' },
      { title: 'Korean Kimchi & Sauces' },
      { title: 'Chinese Spices & Oils' },
      { title: 'Filipino Staples' },
      { title: 'Coconut Products' },
    ],
  },
  {
    title: 'Fresh Vegetables',
    slug: 'fresh-vegetables',
    description:
      'Farm-fresh produce delivered across Helsinki, Espoo, Vantaa and Uusimaa.',
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
  { label: 'Basmati Rice' },
  { label: 'Gundruk' },
  { label: 'Fresh Coriander' },
  { label: 'Garam Masala' },
  { label: 'Kimchi' },
  { label: 'Sel Roti Mix' },
];

export const restrictedBottomNavRoutes = [
  '/products',
  /^\/products\/.*/,
  /^\/accounts\/.*/,
];
