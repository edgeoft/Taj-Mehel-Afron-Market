import { Box, Divider, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';

import { OrderItemType } from '@/types/order';
import { formatPriceInRs } from '@/utils/price';
import Link from 'next/link';

type Props = {
  orderItem: OrderItemType;
};

const OrderItem = ({ orderItem }: Props) => {
  return (
    <>
      <Flex
        justify={'space-between'}
        align={'flex-start'}
        gap={{ base: 8, xl: 16 }}
        className="myCart-card"
      >
        <Flex
          justify={'flex-start'}
          align={'flex-start'}
          gap={{ base: 8, md: 15.67 }}
          className="w-full"
        >
          <Link href={`/products/${orderItem?.id}`} passHref>
            <Image
              src={orderItem.image[0]}
              alt={'mycar-image'}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover myCart-image"
            />
          </Link>
          <Box className="myCart-card-info">
            <Link href={`/products/${orderItem?.id}`} passHref>
              <Title order={4} mb={8} lineClamp={2}>
                {orderItem?.name}{' '}
              </Title>
            </Link>
            <Text className="body-2" c={'neutral.7'}>
              {orderItem?.size
                ? `Size : ${orderItem?.size}`
                : `Storage : ${orderItem?.storage}`}
            </Text>
          </Box>
        </Flex>

        <Flex
          justify={'space-between'}
          align={'flex-start'}
          gap={{ base: 8, md: 16 }}
          pl={{ base: 18, md: 26 }}
          className="w-full"
        >
          <Box>
            <Title order={6} c={'neutral.10'} mb={{ base: 4, md: 12 }}>
              Price
            </Title>
            <Text className="body-2" c={'neutral.10'}>
              {formatPriceInRs(orderItem?.price)}
            </Text>
          </Box>
          <Box>
            <Title order={6} c={'neutral.10'} mb={{ base: 4, md: 12 }}>
              Quantity
            </Title>
            <Text className="body-2 text-center" c={'neutral.10'}>
              {orderItem?.quantity}
            </Text>
          </Box>
          <Box>
            <Title
              order={6}
              c={'neutral.10'}
              className="text-right"
              mb={{ base: 4, md: 12 }}
            >
              Total
            </Title>
            <Text className="body-2" c={'neutral.10'}>
              {formatPriceInRs(orderItem?.total)}
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Divider color={'neutral.3'} />
    </>
  );
};

export default OrderItem;
