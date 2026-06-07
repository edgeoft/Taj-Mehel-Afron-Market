import {
  TFooterBottomLinks,
  TFooterCategoryLinks,
  TFooterSocial,
} from '@/types/footer';
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';

export const FOOTER_CATEGORY_LINKS: TFooterCategoryLinks[] = [
  {
    category: 'Indian Staples',
    subCategories: [
      { title: 'Rice & Grains' },
      { title: 'Lentils & Pulses' },
      { title: 'Spices & Masalas' },
      { title: 'Flours & Atta' },
    ],
  },
  {
    category: 'Nepalese Products',
    subCategories: [
      { title: 'Gundruk & Sinki' },
      { title: 'Dal Bhat Essentials' },
      { title: 'Sel Roti Mix & Flours' },
      { title: 'Achar & Pickles' },
    ],
  },
  {
    category: 'Asian Products',
    subCategories: [
      { title: 'Thai Sauces & Pastes' },
      { title: 'Japanese Noodles & Rice' },
      { title: 'Korean Kimchi & Sauces' },
      { title: 'Chinese Spices & Oils' },
    ],
  },
  {
    category: 'Fresh & Pantry',
    subCategories: [
      { title: 'Fresh Vegetables' },
      { title: 'Leafy Greens & Herbs' },
      { title: 'Snacks & Namkeen' },
      { title: 'Beverages & Chai' },
    ],
  },
];

export const FOOTER_BOTTOM_LINKS: TFooterBottomLinks[] = [
  {
    title: 'Company',
    subLinks: [
      { title: 'About Us', link: '/about-us' },
      { title: 'Contact Us', link: '/contact-us' },
      { title: 'Privacy Policy', link: '/privacy-policy' },
      { title: 'Terms of use', link: '/terms-of-use' },
    ],
  },
  {
    title: 'Service Areas',
    subLinks: [
      { title: 'Helsinki' },
      { title: 'Espoo' },
      { title: 'Vantaa' },
      { title: 'Uusimaa' },
    ],
  },
  {
    title: 'Contact',
    subLinks: [
      { title: 'Hakaniemi torikatu 2, 00530 Helsinki' },
      { title: '040 815 1341' },
      { title: 'namaste.indianmarket@gmail.com' },
    ],
  },
];

export const FOOTER_SOCIAL: TFooterSocial[] = [
  {
    link: 'https://www.instagram.com/',
    SocialLogoComponent: (
      <InstagramLogo
        size={24}
        weight="fill"
        color="#454545"
        aria-label="Instagram"
      />
    ),
  },
  {
    link: 'https://www.facebook.com/',
    SocialLogoComponent: (
      <FacebookLogo
        size={24}
        weight="fill"
        color="#454545"
        aria-label="Facebook"
      />
    ),
  },
  {
    link: 'https://www.youtube.com/',
    SocialLogoComponent: (
      <YoutubeLogo
        size={24}
        weight="fill"
        color="#454545"
        aria-label="Youtube"
      />
    ),
  },
  {
    link: 'https://www.tiktok.com/',
    SocialLogoComponent: (
      <TiktokLogo size={24} weight="fill" color="#454545" aria-label="Tiktok" />
    ),
  },
];
