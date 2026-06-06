import BreadCrumb from '@/components/common/Breadcrumb';
import OrderSummary from '@/components/common/OrderSummary';
import { cartBreadCrumb, cartData } from '@/static/cart';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { Trash } from '@phosphor-icons/react/dist/ssr';
import CartLeftSection from './CartLeftSection';
import React from 'react';

type Props = {};

const MyCartSection = ({}: Props) => {
  return (
    <Container className="padding-b-72">
      <Box mb={{ base: 14, lg: 19 }}>
        <BreadCrumb data={[...cartBreadCrumb]} />
      </Box>
      <Flex
        justify={'space-between'}
        align={'flex-start'}
        gap={32}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box className="myCart-container flex-1">
          <Title order={2} className="heading-4" c={'neutral.10'}>
            My Cart
          </Title>

          <Divider mt={8} mb={{ base: 16, md: 24 }} color={'neutral.3'} />

          <Flex justify={'space-between'} align={'center'} gap={8}>
            <Checkbox className="myCart-checkbox" />
            <Text className="body-2 flex-1" c={'neutral.7'}>
              Select All (3 Items)
            </Text>
            <Button leftSection={<Trash weight="bold" />} variant="transparent">
              Delete
            </Button>
          </Flex>

          <Divider mt={8} mb={{ base: 16, md: 24 }} color={'neutral.3'} />

          {cartData.map((item, index) => (
            <Box
              key={index}
              mb={cartData.length - 1 > index ? { base: 24, lg: 41 } : 0}
            >
              <CartLeftSection cartItem={item} />
            </Box>
          ))}

          <Divider mt={16} mb={24} color={'neutral.3'} />
          <Flex justify={'space-between'} align={'center'} gap={8}>
            <Title order={4} c={'neutral.10'} pl={50}>
              4 Items
            </Title>
            <Title order={4} c={'neutral.10'}>
              Rs. 1,25,000
            </Title>
          </Flex>
        </Box>

        <OrderSummary page="cart" />
      </Flex>
    </Container>
  );
};

export default MyCartSection;
