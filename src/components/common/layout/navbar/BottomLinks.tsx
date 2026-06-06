'use client';
import Link from 'next/link';
import { Flex, Text } from '@mantine/core';
import { Bag, Heart, House, User } from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';

import { restrictedBottomNavRoutes } from '@/static/navbar';

const BottomLinks = () => {
  const pathname = usePathname();

  const BOTTOM_LINKS = [
    { link: '/', title: 'Home', Icon: House },
    { link: '/accounts/favourites', title: 'Favorites', Icon: Heart },
    { link: '/my-cart', title: 'My Cart', Icon: Bag },
    { link: '/accounts/my-profile', title: 'Profile', Icon: User },
  ];

  const showBottomNavDisplay = !restrictedBottomNavRoutes.some((route) =>
    typeof route === 'string' ? pathname === route : route.test(pathname)
  );

  return (
    <Flex
      justify="space-between"
      align="center"
      gap={16}
      h="100%"
      px={16}
      py={16}
      pos="sticky"
      bottom={0}
      bg="neutral.0"
      className="navbar-bottomlinks box-shadow-bottom-nav"
      display={{ base: showBottomNavDisplay ? 'flex' : 'none', md: 'none' }}
    >
      {BOTTOM_LINKS.map(({ title, Icon, link }, index) => {
        const isActive = pathname === link;
        return (
          <Link key={index} href={link}>
            <Flex
              justify="center"
              align="center"
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 8, md: 11 }}
              w={{ base: 64, md: 'max-content' }}
              h={{ base: 46, md: 'max-content' }}
            >
              <Icon
                size={24}
                weight={isActive ? 'fill' : 'regular'}
                color={isActive ? '#6A3120' : '#212121'}
              />
              <Text
                className="navbar-bottomlinks-text"
                c={isActive ? 'primary' : 'neutral.10'}
              >
                {title}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default BottomLinks;
