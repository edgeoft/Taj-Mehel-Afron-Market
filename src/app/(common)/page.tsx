import { Box } from '@mantine/core';
import FeatureList from '@/components/page/home/FeatureList';
import OfferList from '@/components/page/home/OfferList';
import PopularStaplesItems from '@/components/page/home/PopularFunitureItems';
// import PopularSnacksItems from '@/components/page/home/PopularElectronicsItems';
import NewArrivalsList from '@/components/page/home/NewArrival';
import Newsletter from '@/components/common/Newsletter';
// import RequirementBanner from '@/components/common/requirement-banner';
import BannerSliders from '@/components/page/home/BannerSliders';

export default function Home() {
  return (
    <>
      <BannerSliders />

      <Box visibleFrom="md">
        <FeatureList />
      </Box>

      <NewArrivalsList />

      <OfferList />

      <PopularStaplesItems />

      {/* Request a product — hidden for now, re-enable when needed */}
      {/* <RequirementBanner /> */}

      {/* Snacks & Beverages — hidden for now, re-enable when needed */}
      {/* <PopularSnacksItems /> */}

      <Newsletter />
    </>
  );
}
