import { Box, Button, Flex, Text, Title } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

import { banners } from '@/static/home';

type Props = {
  index: number;
  banner: (typeof banners)[0];
};

const Slide = ({ index, banner }: Props) => {
  const colors = ['yellow.9', 'secondary.0', 'primary.0'];
  const cardColor = colors[index % colors.length];

  return (
    <Flex
      h={{ base: 'auto', lg: 419 }}
      direction={{ base: 'column-reverse', lg: 'row' }}
      className="bannerSliders-container"
    >
      <Box
        bg={cardColor}
        flex={1}
        p={{ base: 24, md: 32, lg: 56 }}
        h={{ base: 'auto', md: '100%' }}
      >
        <Title order={6} c={'orange'}>
          {banner?.tag}
        </Title>

        <Title
          order={2}
          mt={8}
          c={'primary'}
          className="bannerSliders-container-heading-2"
          lineClamp={1}
        >
          {banner?.title}
        </Title>

        <Text
          className="body-2"
          mt={8}
          c={'neutral.7'}
          w={{ base: '100%', sm: 433 }}
        >
          {banner?.description}
        </Text>

        <Link href={'/products'} passHref>
          <Button
            variant="secondary"
            rightSection={<CaretRight />}
            mt={{ base: 24, md: 32 }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
      <Box
        flex={1}
        h={{ base: '268px', md: 419 }}
        mah={{ base: '268px', sm: '400px', md: '419px' }}
      >
        <Image
          src={banner?.image}
          alt={banner?.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover bannerSliders-container-image"
        />
      </Box>
    </Flex>
  );
};

export default Slide;
