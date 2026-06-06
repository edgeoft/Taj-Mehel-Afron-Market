import { Button, Card, Flex, Text, Title } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  index: number;
  category: string;
  title: string;
  image: string;
  offerTill: string;
  link?: string;
};

const OfferCard = ({
  index,
  category,
  image,
  offerTill,
  title,
  link,
}: Props) => {
  const colors = ['light-yellow.0', 'secondary.0', 'primary.0'];
  const cardColor = colors[index % colors.length];

  return (
    <Card p={0} w={{ base: 249, md: 430 }} radius={0}>
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      <Flex
        direction={'column'}
        gap={{ base: 16, md: 24 }}
        p={{ base: 16, md: 24 }}
        bg={cardColor}
      >
        <Flex direction={'column'} gap={8}>
          <Title order={6} c={'secondary'}>
            {category}
          </Title>

          <Title order={3} c={'primary'} lineClamp={1}>
            {title}
          </Title>

          <Text className="body-1" c={'neutral.7'}>
            Don&apos;t miss the exciting offer valid till {offerTill}
          </Text>
        </Flex>

        <Link passHref href={`/categories/${link}`}>
          <Button
            variant="secondary-outline"
            w={'fit-content'}
            rightSection={<CaretRight />}
          >
            Shop Now
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};

export default OfferCard;
