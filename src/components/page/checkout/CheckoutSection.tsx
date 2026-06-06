import BreadCrumb from '@/components/common/Breadcrumb';
import OrderSummary from '@/components/common/OrderSummary';
import { cartProductInfo, checkoutBreadCrumb } from '@/static/checkout';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { PencilSimple, WarningCircle } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import CheckoutChangeOrder from './CheckoutChangeOrder';
import CheckoutDeliverySection from './CheckoutDeliverySection';
import PaymentOptionsSection from './PaymentOptionsSection';

type Props = {};

const CheckoutSection = ({}: Props) => {
  const checkoutProductInfo = cartProductInfo();

  return (
    <Container className="padding-b-72">
      <Box mb={{ base: 14, lg: 19 }}>
        <BreadCrumb data={[...checkoutBreadCrumb]} />
      </Box>
      <Flex
        justify={'space-between'}
        align={'flex-start'}
        gap={{ base: 16, lg: 32 }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box className="checkout-container flex-1">
          <Box className="checkout-orderContainer">
            <Flex justify={'space-between'} align={'center'} gap={16}>
              <Title
                order={2}
                className="heading-4 checkout-reviewOrder"
                c={'neutral.10'}
              >
                Review Order
              </Title>
              <Link passHref href={'/my-cart'}>
                <Button
                  variant="transparent"
                  leftSection={<PencilSimple color={'#212121'} weight="bold" />}
                  className="checkout-changeOrderButton"
                >
                  Change Order
                </Button>
              </Link>
            </Flex>

            <Divider
              mt={8}
              mb={{ base: 16, md: 24 }}
              color={'neutral.3'}
              ml={10}
            />

            <CheckoutChangeOrder />

            {checkoutProductInfo.some(
              (prodItem) => prodItem.quantity > prodItem.stock
            ) && (
              <Flex
                justify={'flex-start'}
                align={'center'}
                maw="max-content"
                gap={8}
                px={8}
                py={4}
                mt={16}
                bd="1px solid error"
                bg="#FBEEED"
              >
                <Box w={16} h={16}>
                  <WarningCircle size={16} color="#FF4637" />
                </Box>
                <Box className="flex-1">
                  <Text className="body-2" c={'error'}>
                    Some of products are out of stock, please remove it to
                    proceed further
                  </Text>
                </Box>
              </Flex>
            )}
          </Box>

          <CheckoutDeliverySection />

          <PaymentOptionsSection className="checkout-paymentOpt-left" />
        </Box>

        <Box className="checkout-right">
          <PaymentOptionsSection visibleFrom="lg" />
          <OrderSummary
            page="checkout"
            pos={'static'}
            className="checkout-orderSummary"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckoutSection;
