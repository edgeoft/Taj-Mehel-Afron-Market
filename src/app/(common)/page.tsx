import { Box } from '@mantine/core';
import FeatureList from '@/components/page/home/FeatureList';
import OfferList from '@/components/page/home/OfferList';
import PopularFunitureItems from '@/components/page/home/PopularFunitureItems';
import PopularElectronicsItems from '@/components/page/home/PopularElectronicsItems';
import NewArrivalsList from '@/components/page/home/NewArrival';
import Newsletter from '@/components/common/Newsletter';
import RequirementBanner from '@/components/common/requirement-banner';
import BannerSliders from '@/components/page/home/BannerSliders';

export default function Home() {
  return (
    <>
      {/* Banner Slider List */}
      <BannerSliders />

      {/* Feature List */}
      <Box visibleFrom="md">
        <FeatureList />
      </Box>

      {/* New Arrival Items */}
      <NewArrivalsList />

      {/* Offer List */}
      <OfferList />

      {/* Popular Funiture Items */}
      <PopularFunitureItems />

      {/* Requirement Banner */}
      <RequirementBanner />

      {/* Popular Electronics Items */}
      <PopularElectronicsItems />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
