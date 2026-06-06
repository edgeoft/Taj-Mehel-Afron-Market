'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Link from 'next/link';

import Counter from '@/components/common/form/Counter';
import { TCartItem } from '@/types/cart';
import { formatPriceInRs } from '@/utils/price';
import { Box, Checkbox, Divider, Flex, Text, Title } from '@mantine/core';

type Props = {
  productData: TCartItem;
};

const CartItem = ({ productData }: Props) => {
  const [countData, setCountData] = useState(productData.quantity ?? 0);

  const totalAmt = useMemo(() => {
    return productData.price * countData;
  }, [countData, productData.price]);

  return (
    <>
      <Box>
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
            <Checkbox className="myCart-checkbox" />
            <Link href={`/products/1`}>
              <Image
                src={productData.image}
                alt={'mycar-image'}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover myCart-image"
              />
            </Link>
            <Box className="myCart-card-info">
              <Link href={`/products/1`}>
                <Title order={4} mb={8}>
                  {productData.name}{' '}
                </Title>
              </Link>
              <Text className="body-2" c={'neutral.7'} mb={6}>
                Size : {productData.size}
              </Text>
              <Text
                className="tag-text"
                c={productData.stock > 0 ? 'secondary.6' : 'error'}
              >
                {productData.stock > 0 ? 'IN STOCK' : 'OUT OF STOCK'}
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
              <Title order={5} c={'neutral.10'} mb={12}>
                Price
              </Title>
              <Text className="body-2" c={'neutral.10'}>
                {formatPriceInRs(productData.price)}
              </Text>
            </Box>
            <Box>
              <Title order={5} c={'neutral.10'} mb={4}>
                Quantity
              </Title>
              <Counter value={countData} handleChange={setCountData} />
            </Box>
            <Box>
              <Title order={5} c={'neutral.10'} className="text-right" mb={12}>
                Total
              </Title>
              <Text className="body-2" c={'neutral.10'}>
                {formatPriceInRs(totalAmt)}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Divider mt={16} mb={16} color={'neutral.3'} />
      </Box>
    </>
  );
};

export default CartItem;
