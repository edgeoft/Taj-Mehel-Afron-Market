import { Box, Divider, Flex, Text } from '@mantine/core';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import ProfilePopover from './ProfilePopover';
import MyCart from './MyCart';
import Link from 'next/link';

const NavbarRight = () => {
  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      gap={{ base: 10, lg: 16 }}
      h={'100%'}
    >
      <Divider
        orientation="vertical"
        className="navbar-divider"
        visibleFrom="md"
      />
      <Link href={'/accounts/favourites'} passHref>
        <Flex
          justify={'space-between'}
          align={'center'}
          gap={8}
          visibleFrom="md"
        >
          <Heart size={24} />
          <Text display={{ base: 'none', lg: 'block' }} className="body-2">
            Favourites
          </Text>
        </Flex>
      </Link>
      <Divider
        orientation="vertical"
        className="navbar-divider"
        visibleFrom="md"
      />
      <MyCart />
      <Divider
        orientation="vertical"
        className="navbar-divider"
        visibleFrom="md"
      />
      <Box visibleFrom="md">
        <ProfilePopover />
      </Box>
    </Flex>
  );
};

export default NavbarRight;
