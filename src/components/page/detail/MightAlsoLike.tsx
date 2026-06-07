import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { popularFunitures } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';

type Props = {};

const MightAlsoLike = ({}: Props) => {
  return (
    <Container className="padding-b-72">
      <Flex gap={24} direction={'column'}>
        <SectionHeader
          title={'You might also like'}
          type="description"
          description={'Related staples and pantry essentials'}
          link="/products"
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {popularFunitures.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default MightAlsoLike;
