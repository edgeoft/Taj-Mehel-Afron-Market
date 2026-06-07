import Input from '@/components/common/form/Input';
import { ORDER_INFO } from '@/components/common/OrderSummary';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { Storefront, X } from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import CartItem from './CartItem';
import { cartData } from '@/static/cart';
import Link from 'next/link';
import DiscountCode from '@/components/common/DiscountCode';

type TCartDrawerProps = {
  opened: boolean;
  close: () => void;
};

const CartDrawer = ({ opened, close }: TCartDrawerProps) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        withCloseButton={false}
        className="myCart-drawer"
        zIndex={301}
      >
        <Box
          bg={'neutral.0'}
          pos={'sticky'}
          top={0}
          left={0}
          pt={24}
          style={{ zIndex: 2 }}
        >
          <Flex justify={'space-between'} align={'center'} gap={8}>
            <Title order={2} c={'neutral.10'} className="heading-4">
              My Cart(4)
            </Title>
            <X
              size={20}
              weight="bold"
              className="cursor-pointer"
              onClick={() => close()}
            />
          </Flex>
          <Divider mt={8} mb={16} color={'neutral.3'} />
        </Box>

        <Box className="myCart-drawerItem flex-1">
          {cartData.map((cartItem, index) => (
            <React.Fragment key={index}>
              <Flex justify={'space-between'} align={'center'} gap={8}>
                <Flex justify={'flex-start'} align={'center'} gap={8}>
                  <Checkbox className="myCart-checkbox" />
                  <Flex justify={'flex-start'} align={'center'} gap={4}>
                    <Flex justify={'flex-start'} align={'center'} gap={4}>
                      <Storefront size={17} color={'#212121'} />
                      <Text className="body-2" c={'neutral.9'}>
                        {cartItem.seller}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex justify={'flex-start'} align={'center'} gap={8}>
                  <Title order={5} c={'neutral.9'}>
                    Delivery Charge:
                  </Title>
                  <Text className="body-2" c={'neutral.9'}>
                    €4,99
                  </Text>
                </Flex>
              </Flex>

              <Divider mt={16} mb={16} color={'neutral.3'} />

              {cartItem.items.map((productData, index) => (
                <React.Fragment key={index}>
                  <CartItem productData={productData} />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </Box>

        <Box py={16} bg={'neutral.0'}>
          <DiscountCode />
          <Divider my={16} color={'neutral.3'} />
          {ORDER_INFO.map((item, index) => (
            <Flex
              key={index}
              justify={'space-between'}
              align={'center'}
              mb={12}
            >
              <Text className="body-2" c={'nuetral.7'}>
                {item.label}
              </Text>
              <Text className="body-1" c={'neutral.10'}>
                {item.value}
              </Text>
            </Flex>
          ))}

          <Flex justify={'space-between'} align={'center'}>
            <Title order={4}>Total</Title>
            <Title order={3}>€43,44</Title>
          </Flex>
          <Divider my={16} color={'neutral.3'} />
          <Flex justify={'space-between'} align={'center'} gap={16}>
            <Link
              href={'/checkout'}
              className="w-full"
              onClick={() => close()}
              passHref
            >
              <Button className="w-full">Checkout</Button>
            </Link>
            <Link
              href={'/my-cart'}
              className="w-full"
              onClick={() => close()}
              passHref
            >
              <Button variant="outline" className="w-full">
                View Cart
              </Button>
            </Link>
          </Flex>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
