import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { figtree } from '../../font';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import Footer from '@/components/common/layout/Footer';
import Navbar from '@/components/common/layout/navbar';
import BottomLinks from '@/components/common/layout/navbar/BottomLinks';

import '@/styles/index.scss';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export const metadata: Metadata = {
  title: {
    default: 'Taj Mehal Afro-Asian Market | Grocery Store in Vantaa',
    template: '%s | Taj Mehal Afro-Asian Market',
  },
  description:
    'Authentic Afro-Asian groceries delivered across Helsinki, Espoo, Vantaa and Uusimaa. Spices, rice, lentils, snacks and more at Taj Mehal Afro-Asian Market.',
  keywords: [
    'Afro-Asian grocery',
    'Vantaa',
    'Indian food',
    'African food',
    'Asian food',
    'spices',
    'Taj Mehal Afro-Asian Market',
  ],
  authors: [{ name: 'Taj Mehal Afro-Asian Market' }],
  openGraph: {
    title: 'Taj Mehal Afro-Asian Market | Grocery Store in Vantaa',
    description:
      'Authentic Afro-Asian groceries delivered across Helsinki, Espoo, Vantaa and Uusimaa.',
    locale: 'en_FI',
    type: 'website',
    siteName: 'Taj Mehal Afro-Asian Market',
  },
  // Favicon disabled — restore src/app/icon.png from src/assets/images/logo/favicon.png.disabled to re-enable
  // icons: {
  //   icon: '/favicon.ico',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${figtree.variable}`}>
        <MantineProvider theme={theme}>
          <NextTopLoader showSpinner={false} color="#0D1F3D" height={3} />
          <Navbar />
          {children}
          <Footer />
          <BottomLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
