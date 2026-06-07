'use client';

import { images } from '@/assets';
import { Box, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { X } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import CategoryListing from './CategoryListing';
import FreeDeliveryInfo from './FreeDeliveryInfo';

const NavSidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box onClick={open} className="navbar-mobile-hamburgerContainer">
        <Image
          src={images.menu}
          alt="Nav Menu"
          width={24}
          height={24}
          className="navbar-mobile-hamburger"
        />
      </Box>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        className="navbar-sidebar"
        zIndex={301}
      >
        <Flex
          justify={'center'}
          align={'flex-start'}
          gap={32}
          direction={'column'}
          w={'100%'}
        >
          <Flex justify={'flex-start'} align={'center'} gap={12}>
            <X
              size={24}
              weight="bold"
              className="cursor-pointer"
              onClick={close}
            />
            <Image
              src={images.mainLogo}
              alt="Namaste Indian Market logo"
              width={114}
              height={32}
              priority
              className="navbar-logo"
            />
          </Flex>
          <CategoryListing close={close} />
          <FreeDeliveryInfo />
        </Flex>
      </Drawer>
    </>
  );
};

export default NavSidebar;
