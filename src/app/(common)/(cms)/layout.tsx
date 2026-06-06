import { Container } from '@mantine/core';

import Newsletter from '@/components/common/Newsletter';

import '@/styles/components/__cmsContent.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container className="padding-b-72 cmsContent-container">
        {children}
      </Container>
      <Newsletter />
    </>
  );
}
