import Image from 'next/image';

import { images } from '@/assets';
import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <Flex
      direction={'column'}
      align="center"
      justify={'center'}
      w={'100%'}
      gap={{ base: 16, md: 24 }}
      mih={'80vh'}
      px={{ base: 24, sm: 32, md: 0 }}
      className="pageNotFound-container"
    >
      <Stack gap={16} align="center" w={'100%'}>
        <Image
          src={images.pageNotFound}
          alt={'404 Page Not Found'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto pageNotFound-image"
        />

        <Title
          order={2}
          c={'primary'}
          className="text-center pageNotFound-title"
          w={{ base: '100%', md: 700 }}
        >
          Ooops Page Not Found
        </Title>
        <Text
          className="body-1 text-center pageNotFound-desc"
          c={'neutral.6'}
          w={{ base: '100%', md: 540 }}
        >
          Sorry the page you&apos;re looking for could not be found. Please go
          to home page to continue
        </Text>
      </Stack>

      <Link passHref href={'/'}>
        <Button>Go to Home</Button>
      </Link>
    </Flex>
  );
};

export default PageNotFound;
