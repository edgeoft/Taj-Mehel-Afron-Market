import Image from 'next/image';

import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  description: string;
  btn: {
    label: string;
    link: string;
  };
};

const EmptyPlaceholder = ({ image, title, description, btn }: Props) => {
  return (
    <Flex
      direction={'column'}
      align="center"
      justify={'center'}
      w={'100%'}
      gap={{ base: 16, md: 32 }}
      mih={'75vh'}
      px={{ base: 16, md: 0 }}
    >
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        style={{ maxHeight: '288px' }}
      />

      <Stack gap={8} align="center" w={{ base: '100%', md: 404 }}>
        <Title order={2} c={'neutral.10'} className="text-center">
          {title}
        </Title>

        <Text className="body-1 text-center" c={'neutral.7'}>
          {description}
        </Text>
      </Stack>

      <Link passHref href={btn?.link}>
        <Button>{btn.label}</Button>
      </Link>
    </Flex>
  );
};

export default EmptyPlaceholder;
