import DashboardSidenav from '@/components/common/layout/dashboard-sidenav';
import DashboardHeader from '@/components/common/layout/dashboard-sidenav/DashboardHeader';
import { Container, Flex } from '@mantine/core';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="padding-b-72">
      <DashboardHeader />
      <Flex gap={16}>
        <DashboardSidenav />
        {children}
      </Flex>
    </Container>
  );
}
