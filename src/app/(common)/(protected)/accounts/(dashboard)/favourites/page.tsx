import { Card, Stack } from '@mantine/core';

import FormSectionHeading from '@/components/common/FormSectionHeading';
import FavouriteListing from '@/components/page/accounts/favourites/FavouriteListing';
import EmptyPlaceholder from '@/components/common/EmptyPlaceholder';
import { images } from '@/assets';
import { popularFunitures } from '@/static/product';

type Props = {};

const FavouritePage = ({}: Props) => {
  return (
    <>
      {popularFunitures?.length ? (
        <Card withBorder w="100%" p={{ base: 16, md: 32 }}>
          <Stack gap={24}>
            <FormSectionHeading title="Favourite" order={3} />
            <FavouriteListing favouriteListings={popularFunitures} />
          </Stack>
        </Card>
      ) : (
        <EmptyPlaceholder
          title="No Favourites Found"
          description="You haven't liked anything yet. Start exploring"
          image={images.favouritePlaceholder}
          btn={{
            label: 'Explore Now',
            link: '/products',
          }}
        />
      )}
    </>
  );
};

export default FavouritePage;
