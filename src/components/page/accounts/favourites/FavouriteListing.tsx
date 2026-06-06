import { SimpleGrid } from '@mantine/core';

import ProductCard from '@/components/common/card/ProductCard';
import { popularFunitures } from '@/static/product';
import { Product } from '@/types/product';

type Props = {
  favouriteListings: Product[];
};

const FavouriteListing = ({ favouriteListings }: Props) => {
  return (
    <SimpleGrid cols={{ base: 2, xl: 3 }}>
      {favouriteListings?.map((product) => (
        <ProductCard key={product?.id} product={product} isFavourite />
      ))}
    </SimpleGrid>
  );
};

export default FavouriteListing;
