'use client';

import CartDrawer from '@/components/page/my-cart/CartDrawer';
import { NAVBAR_DUMMY_OPT } from '@/static/navbar';
import { Box, Select, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Bag } from '@phosphor-icons/react/dist/ssr';
import { useEffect } from 'react';

const MyCart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!isMediumScreen) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMediumScreen]);

  return (
    <>
      <Box className="navbar-cart" visibleFrom="md">
        <Select
          data={NAVBAR_DUMMY_OPT}
          leftSection={<Bag size={24} />}
          rightSection={
            <Box>
              <Text
                className="body-2"
                c={'neutral.9'}
                style={{ fontWeight: '700 !important' }}
              >
                My Cart
              </Text>
              <Text
                className="body-2-small font-size-12"
                c={'secondary.6'}
                lineClamp={1}
              >
                €43,44
              </Text>
            </Box>
          }
          rightSectionWidth={80}
          styles={{
            dropdown: {
              minWidth: '250px',
            },
          }}
          dropdownOpened={false}
          onDropdownOpen={() => open()}
          value=""
        />
        <Box className="navbar-cart-count">
          <Text className="font-size-10" c={'neutral.0'}>
            13
          </Text>
        </Box>
      </Box>
      <CartDrawer opened={opened} close={close} />
    </>
  );
};

export default MyCart;
