import { Container, Flex, SimpleGrid } from '@mantine/core';

import SectionHeader from '@/components/common/section-header';
import { products } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';
import { Product } from '@/types/product';

type Props = {
  title: string;
  description: string;
  link: string;
  products: Product[];
  padding?: string;
};

const CategoryProductList = ({
  title,
  description,
  link,
  products,
  padding = 'padding-t-72',
}: Props) => {
  return (
    <Container className={padding}>
      <Flex gap={{ base: 16, md: 24 }} direction={'column'}>
        <SectionHeader
          title={title}
          type="description"
          description={description}
          link={link}
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default CategoryProductList;
