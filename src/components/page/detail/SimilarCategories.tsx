import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { popularFunitures } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';

type Props = {};

const SimilarCategories = ({}: Props) => {
  return (
    <Container className="padding-b-72">
      <Flex gap={24} direction={'column'}>
        <SectionHeader
          title={'Similar Categories'}
          type="description"
          description={'Best furnitures for your home'}
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

export default SimilarCategories;
