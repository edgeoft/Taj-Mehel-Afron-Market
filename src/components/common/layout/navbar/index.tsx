import { Container, Flex, Title } from '@mantine/core';
import DeliveryAreaSelection from './DeliveryAreaSelection';
import NavbarRight from './NavbarRight';
import NavbarSearch from './NavbarSearch';
import MegaMenu from './MegaMenu';
import Logo from '@/components/common/layout/Logo';
import NavSidebar from './NavSidebar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container h={{ base: 112, lg: 72 }}>
        <Title order={1} className="hidden">
          Taj Mehel Afro Asian Market
        </Title>
        <Flex
          justify={'space-between'}
          align={'center'}
          gap={{ base: 0, md: 10, lg: 24 }}
          h={72}
        >
          <Flex
            justify={{ base: 'space-between', lg: 'flex-start' }}
            align={'center'}
            gap={10}
          >
            <NavSidebar />
            <Logo className="navbar-logo" />
            <DeliveryAreaSelection className="navbar-mobile-delivery" />
          </Flex>
          <DeliveryAreaSelection />
          <NavbarSearch />
          <NavbarRight />
        </Flex>
        <NavbarSearch className="navbar-mobile-search" maxWidth={'100%'} />
      </Container>
      <MegaMenu />
    </nav>
  );
};

export default Navbar;
