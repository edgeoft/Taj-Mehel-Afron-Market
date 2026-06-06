import CardSlider from '@/components/common/slider/CardSlider';
import { cartProductInfo } from '@/static/checkout';
import { CarouselSlide } from '@mantine/carousel';
import { Box, Card, Flex, Text } from '@mantine/core';
import Image from 'next/image';

type Props = {};

const CheckoutChangeOrder = ({}: Props) => {
  const checkoutProductInfo = cartProductInfo();

  return (
    <Box style={{ overflowX: 'clip' }}>
      <CardSlider
        slideSize={0}
        withControls={false}
        dragFree={true}
        slideGap={16}
        pl={10}
      >
        {checkoutProductInfo.map((prodItem, index) => (
          <CarouselSlide key={`${prodItem.name}-${index}`}>
            <Card
              p={0}
              w={80}
              h={80}
              radius={0}
              className="cursor-pointer overflow-visible"
            >
              <Image
                src={prodItem.image}
                alt={prodItem.name}
                width={80}
                height={80}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
              <Flex
                justify={'center'}
                align={'center'}
                pos={'absolute'}
                top={-10}
                left={-10}
                w={17}
                h={17}
                className="rounded cursor-pointer"
                bg={prodItem.quantity > prodItem.stock ? 'error' : 'secondary'}
              >
                <Text className="tag-text" c={'neutral.0'}>
                  {prodItem.quantity}
                </Text>
              </Flex>
            </Card>
          </CarouselSlide>
        ))}
      </CardSlider>
    </Box>
  );
};

export default CheckoutChangeOrder;
