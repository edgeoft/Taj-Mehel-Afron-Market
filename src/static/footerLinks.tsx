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
    category: 'Electronics',
    subCategories: [
      { title: 'Home Appliances' },
      { title: 'Entertainment' },
      { title: 'Computers & Laptops' },
      { title: 'Mobiles & Tablets' },
      { title: 'Audios & Headphones' },
      { title: 'Cameras & Photography' },
      { title: 'Gaming & Consoles' },
      { title: 'Smart Home Devices' },
      { title: 'Wearable Technology' },
      { title: 'Personal Care & Grooming' },
      { title: 'Office Electronics' },
    ],
  },
  {
    category: 'Furnitures',
    subCategories: [
      { title: 'Living Room' },
      { title: 'Bedroom' },
      { title: 'Dinning Room' },
      { title: 'Office ' },
      { title: 'Kids & Nursery  ' },
      { title: 'Entryway' },
      { title: 'Storage' },
      { title: 'Accents' },
      { title: 'Home Decors' },
    ],
  },
  {
    category: 'Mens Clothing',
    subCategories: [
      { title: 'Shirts' },
      { title: 'Pants' },
      { title: 'Jackets' },
      { title: 'T_Shirts' },
      { title: 'Suits' },
      { title: 'Shorts' },
      { title: 'Sweaters' },
      { title: 'Ethnic Wear' },
    ],
  },
  {
    category: 'Womens Wear',
    subCategories: [
      { title: 'Tops' },
      { title: 'Pants' },
      { title: 'Jackets' },
      { title: 'Dresses' },
      { title: 'Skirts' },
      { title: 'Sweaters' },
      { title: 'Ethnic Wear' },
      { title: 'Jumpsuits & Rompers' },
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
    title: 'Quick Links',
    subLinks: [{ title: 'News' }, { title: 'FAQs' }],
  },
  {
    title: 'Contact',
    subLinks: [
      { title: 'Maharajgunj, Kathmandu' },
      { title: '9898989898, 01 - 5344556' },
    ],
  },
];

export const FOOTER_SOCIAL: TFooterSocial[] = [
  {
    link: 'https://www.instagram.com/',
    SocialLogoComponent: (
      <InstagramLogo size={24} weight="fill" color="#454545" alt="Instagram" />
    ),
  },
  {
    link: 'https://www.facebook.com/',
    SocialLogoComponent: (
      <FacebookLogo size={24} weight="fill" color="#454545" alt="Facebook" />
    ),
  },
  {
    link: 'https://www.youtube.com/',
    SocialLogoComponent: (
      <YoutubeLogo size={24} weight="fill" color="#454545" alt="Youtube" />
    ),
  },
  {
    link: 'https://www.tiktok.com/',
    SocialLogoComponent: (
      <TiktokLogo size={24} weight="fill" color="#454545" alt="Tiktok" />
    ),
  },
];
