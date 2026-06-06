import CategoryCard from '@/components/common/card/CategoryCard';
import CardSlider from '@/components/common/slider/CardSlider';
import { categories } from '@/static/category';
import { CarouselSlide } from '@mantine/carousel';
import { Container, Flex } from '@mantine/core';

type Props = {};

const CategoryList = ({}: Props) => {
  return (
    <Container>
      <Flex
        rowGap={32}
        columnGap={40}
        justify={'center'}
        wrap={'wrap'}
        visibleFrom="md"
      >
        {categories.map((category) => (
          <CategoryCard key={category?.id} category={category} />
        ))}
      </Flex>

      <CardSlider
        slideSize={'15%'}
        hiddenFrom="md"
        withControls={false}
        dragFree
      >
        {categories.map((category) => (
          <CarouselSlide key={category?.id}>
            <CategoryCard category={category} />
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
};

export default CategoryList;
