import { Box, Button, Flex, Text, Title } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

import { banners } from '@/static/home';

type Props = {
  banner: (typeof banners)[0];
};

const Slide = ({ banner }: Props) => {
  return (
    <Box className="bannerSliders-container">
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1320px"
        className="bannerSliders-container-image"
      />

      <Box className="bannerSliders-overlay" aria-hidden />

      <Flex
        className="bannerSliders-content"
        direction="column"
        justify="center"
        align="flex-start"
        gap={8}
      >
        <Title order={6} className="bannerSliders-tag">
          {banner.tag}
        </Title>

        <Title
          order={2}
          className="bannerSliders-container-heading-2"
          lineClamp={2}
        >
          {banner.title}
        </Title>

        <Text className="body-2 bannerSliders-description" maw={433}>
          {banner.description}
        </Text>

        <Link href="/products" passHref>
          <Button
            variant="secondary"
            rightSection={<CaretRight aria-hidden />}
            mt={{ base: 16, md: 24 }}
            className="bannerSliders-cta"
          >
            Shop Now
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Slide;
