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
  title: 'Nepal Furnitech',
  description: 'Nepal Furnitech',
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
          <NextTopLoader showSpinner={false} color="#6a3120" height={3} />
          <Navbar />
          {children}
          <Footer />
          <BottomLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
