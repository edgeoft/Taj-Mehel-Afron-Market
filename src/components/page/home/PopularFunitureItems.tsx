import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { popularStaples } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';

const PopularStaplesItems = () => {
  return (
    <Container className="padding-t-72">
      <Flex gap={24} direction={'column'}>
        <SectionHeader
          title={'Popular Groceries'}
          type="description"
          description={'Essential rice, dal and spices for your kitchen'}
          link="/products"
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {popularStaples.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default PopularStaplesItems;
