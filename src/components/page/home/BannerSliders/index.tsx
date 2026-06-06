'use client';

import { useRef } from 'react';
import { Container } from '@mantine/core';
import { CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import Slide from './Slide';
import CardSlider from '@/components/common/slider/CardSlider';
import { banners } from '@/static/home';

import '@/styles/page/home/__bannerSlider.scss';

type Props = {};

function BannerSliders({}: Props) {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Container pos={'relative'}>
      <CardSlider
        withControls={false}
        withIndicators
        loop={true}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {banners?.map((banner, index) => (
          <CarouselSlide key={banner?.id}>
            <Slide index={index} banner={banner} />
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
}

export default BannerSliders;
