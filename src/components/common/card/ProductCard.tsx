import Image from 'next/image';
import Link from 'next/link';
import { Box, Card, Flex, Text, Title } from '@mantine/core';
import { Heart } from '@phosphor-icons/react/dist/ssr';

import { Product } from '@/types/product';
import { formatPriceInRs } from '@/utils/price';
import StarRating from '../form/StarRating';
import Tag from '../Tag';

import '@/styles/components/card/__card.scss';

type Props = {
  product: Product;
  isFavourite?: boolean;
};

const ProductCard = ({ product, isFavourite = false }: Props) => {
  return (
    <Link href={`/products/${product?.id}`} passHref>
      <Card
        p={0}
        radius={0}
        withBorder
        className="card-container border-transparent"
      >
        <Box className="image-container" pos="relative" w="full">
          <Image
            src={product?.image[0]}
            alt={product?.name}
            fill // Ensures the image fills the entire container
            sizes="100vw"
            className="object-cover"
          />

          {product?.discountPercent !== 0 ? (
            <Box pos={'absolute'} top={16}>
              <Tag text={`${product?.discountPercent}% off`} />
            </Box>
          ) : null}
        </Box>

        <Flex
          direction={'column'}
          gap={{ base: 4, md: 8 }}
          mt={{ base: 8, md: 12 }}
        >
          <Flex justify={'space-between'} w={'100%'} align={'center'}>
            <Text className="tag-text" c={'neutral.6'}>
              {product?.category}
            </Text>

            {isFavourite ? (
              <Heart weight="fill" color="#FF4637" width={16} height={16} />
            ) : (
              <Heart color="#212121" width={16} height={16} />
            )}
          </Flex>

          <Flex direction={'column'} gap={6}>
            <Title
              className="whitespace-wrap product-title"
              lineClamp={1}
              order={3}
              c={'neutral.9'}
              fw={{ base: 400, md: 'bold' }}
            >
              {product?.name}
            </Title>

            <Text
              className="body-2 whitespace-wrap"
              c={'neutral.7'}
              truncate="end"
              lineClamp={1}
              visibleFrom="md"
            >
              {product?.description}
            </Text>
          </Flex>

          <Flex gap={8} align={'center'}>
            {product?.discountedPrice ? (
              <Title
                order={4}
                className="font-normal"
                td={'line-through'}
                c={'neutral.6'}
              >
                {formatPriceInRs(Number(product?.price))}
              </Title>
            ) : null}

            <Title order={4} c={'neutral.10'}>
              {formatPriceInRs(
                Number(product?.discountedPrice ?? product?.price)
              )}
            </Title>
          </Flex>

          <Flex gap={8} align={'flex-start'}>
            <StarRating value={product?.rating} readOnly />
            <Text className="body-2" c={'neutral.6'}>
              ({product?.noOfRating})
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};

export default ProductCard;
