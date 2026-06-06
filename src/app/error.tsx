'use client';
import Image from 'next/image';
import { Flex, Stack, Text, Title } from '@mantine/core';

import { images } from '@/assets';

import '@/styles/page/_error.scss';

const ErrorPage = () => {
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align="center"
      w={'100%'}
      gap={{ base: 16, md: 24 }}
      mih={'80vh'}
      px={{ base: 24, sm: 32, md: 0 }}
      className="error-container"
    >
      <Stack gap={16} align="center" w={'100%'}>
        <Image
          src={images.error500Img}
          alt={'500 Internal Server Error'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto error-image"
        />

        <Title
          order={2}
          c={'primary'}
          className="text-center error-title"
          w={{ base: '100%', md: 700 }}
        >
          Internal Server Error
        </Title>
        <Text
          className="body-1 text-center error-desc"
          c={'neutral.6'}
          w={{ base: '100%', md: 540 }}
        >
          The server encountered an internal error or misconfiguration and was
          unable to complete your request
        </Text>
      </Stack>
    </Flex>
  );
};

export default ErrorPage;
