import { CarouselSlide } from '@mantine/carousel';
import { Container } from '@mantine/core';

import CardSlider from '@/components/common/slider/CardSlider';
import { offers } from '@/static/home';
import OfferCard from '@/components/common/card/OfferCard';

const OfferList = () => {
  return (
    <Container className="padding-t-72">
      <CardSlider
        slideSize={'25%'}
        withControls={false}
        dragFree={true}
        slideGap={16}
      >
        {offers.map((offer, index) => (
          <CarouselSlide key={offer?.id}>
            <OfferCard
              index={index}
              title={offer?.title}
              category={offer?.category}
              image={offer?.image}
              offerTill={offer?.offerTill}
              link={offer?.link ?? '/'}
            />
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
};

export default OfferList;
