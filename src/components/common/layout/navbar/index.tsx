import { images } from '@/assets';
import { Container, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import DeliveryAreaSelection from './DeliveryAreaSelection';
import NavbarRight from './NavbarRight';
import NavbarSearch from './NavbarSearch';
import MegaMenu from './MegaMenu';
import Link from 'next/link';
import NavSidebar from './NavSidebar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container h={{ base: 112, lg: 72 }}>
        <Title order={1} className="hidden">
          Namaste Indian Market
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
            <Link href={'/'}>
              <Image
                src={images.mainLogo}
                alt="Namaste Indian Market logo"
                width={170}
                height={48}
                priority
                className="navbar-logo"
              />
            </Link>
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
