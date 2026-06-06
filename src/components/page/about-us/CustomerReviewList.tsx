import { CarouselSlide } from '@mantine/carousel';
import { Box, Card, Container, Flex, Stack, Text, Title } from '@mantine/core';

import { images } from '@/assets';
import CardSlider from '@/components/common/slider/CardSlider';
import { customerReviews } from '@/static/aboutUs';
import Image from 'next/image';

const CustomerReviewList = () => {
  return (
    <Box bg={'neutral.2'}>
      <Container className={`padding-y-72`}>
        <Stack gap={4} align="center" w={'100%'} mb={{ base: 24, md: 48 }}>
          <Title order={2} className="heading-2" c={'neutral.10'}>
            Loved by Our Customers{' '}
          </Title>
          <Title
            order={3}
            className="body-1 aboutUs-text-align"
            c={'neutral.7'}
          >
            Here are some testimonials expressed by our beloved customers
          </Title>
        </Stack>
        <CardSlider slideSize="33.33%" withControls={false} dragFree={true}>
          {customerReviews.map((customerReview) => (
            <CarouselSlide key={customerReview?.id}>
              <Card
                p={{ base: 20, md: 40 }}
                w={{ base: 300, md: 405.33 }}
                h={{ base: 300, md: 364 }}
              >
                <Stack
                  gap={16}
                  align="center"
                  w={'100%'}
                  h={'100%'}
                  bd={'0.5px solid secondary'}
                  p={24}
                >
                  <Text className="body-2 flex-1" c={'neutral.7'}>
                    {customerReview.review}
                  </Text>
                  <Flex
                    gap={12}
                    justify={'flex-start'}
                    align={'center'}
                    w={'100%'}
                  >
                    <Image
                      src={customerReview.img}
                      alt={`${customerReview.name}-image`}
                      width={40}
                      height={40}
                      sizes="100vw"
                      className="w-auto object-cover rounded"
                    />
                    <Title order={6} c={'neutral.7'} className="flex-1">
                      {customerReview.name}
                    </Title>
                  </Flex>
                </Stack>
                <Flex
                  justify={'center'}
                  align={'center'}
                  h={{ base: 42, md: 56 }}
                  w={{ base: 42, md: 56 }}
                  bg={'neutral.0'}
                  className="customerReview-topLeft-abs"
                >
                  <Image
                    src={images.customerCardAbsImg}
                    alt={'left-abs'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto object-cover"
                  />
                </Flex>
                <Flex
                  justify={'center'}
                  align={'center'}
                  h={{ base: 42, md: 56 }}
                  w={{ base: 42, md: 56 }}
                  bg={'neutral.0'}
                  className="customerReview-bottomRight-abs"
                >
                  <Image
                    src={images.customerCardAbsImg}
                    alt={'right-abs'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto object-cover"
                  />
                </Flex>
              </Card>
            </CarouselSlide>
          ))}
        </CardSlider>
      </Container>
    </Box>
  );
};

export default CustomerReviewList;
