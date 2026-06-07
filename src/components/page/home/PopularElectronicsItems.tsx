import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { popularSnacks } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';

const PopularSnacksItems = () => {
  return (
    <Container className="padding-y-72">
      <Flex gap={{ base: 16, md: 24 }} direction={'column'}>
        <SectionHeader
          title={'Snacks & Beverages'}
          type="description"
          description={'Namkeen, chai, pickles and refreshing drinks'}
          link="/products"
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {popularSnacks.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default PopularSnacksItems;
