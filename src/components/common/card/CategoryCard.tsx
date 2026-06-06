import { Box, Card, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import { Category } from '@/types/category';

import '@/styles/components/card/__card.scss';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  return (
    <Link href={`/category/${category?.id}`} passHref>
      <Card
        w={{ base: 72, md: 160 }}
        p={0}
        radius={0}
        className="card-container"
      >
        <Box
          w={{ base: 72, md: 144 }}
          h={{ base: 72, md: 104 }}
          pos={'relative'}
          className="image-container rounded-sm"
        >
          <Image
            src={category?.image}
            alt={category?.name}
            fill
            className="object-cover rounded-sm "
          />
        </Box>

        <Title
          order={3}
          c={'neutral.7'}
          className="text-center"
          mt={{ sm: 8, md: 16 }}
        >
          {category?.name}
        </Title>
      </Card>
    </Link>
  );
};

export default CategoryCard;
