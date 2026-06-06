import StarRating from '@/components/common/form/StarRating';
import { productReviewData } from '@/static/detail';
import { Box, Button, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';

const ProductReview = () => {
  return (
    <Box>
      {productReviewData.map(({ name, profile, rating, review }, index) => (
        <Flex
          key={index}
          direction={'column'}
          justify={'flex-start'}
          align={'center'}
          gap={12}
          mb={24}
        >
          <Flex
            justify={'space-between'}
            align={'center'}
            gap={12}
            className="w-full"
          >
            <Flex
              key={index}
              justify={'space-between'}
              align={'center'}
              gap={12}
            >
              <Image
                src={profile}
                alt="Nav Menu"
                width={41}
                height={41}
                className="rounded object-cover"
              />
              <Box>
                <Title order={6} c={'neutral.9'}>
                  {name}
                </Title>
                <StarRating
                  value={rating}
                  //   h={{ base: 20, md: 24 }}
                  readOnly
                />
              </Box>
            </Flex>
            <Text className="body-2" c={'neutral.6'}>
              2 min ago
            </Text>
          </Flex>
          <Text className="body-2" c={'neutral.6'}>
            {review}
          </Text>
        </Flex>
      ))}
      <Button variant="secondary-outline">Load More</Button>
    </Box>
  );
};

export default ProductReview;
