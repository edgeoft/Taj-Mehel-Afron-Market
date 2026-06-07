'use client';

import { useRef } from 'react';
import { Container } from '@mantine/core';
import { CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import Slide from './Slide';
import CardSlider from '@/components/common/slider/CardSlider';
import { banners } from '@/static/home';

import '@/styles/page/home/__bannerSlider.scss';

function BannerSliders() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Container pos="relative" className="bannerSliders-wrapper">
      <CardSlider
        className="bannerSliders-carousel card-slider__carousel"
        slideGap={0}
        withControls={false}
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {banners.map((banner) => (
          <CarouselSlide key={banner.id}>
            <Slide banner={banner} />
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
}

export default BannerSliders;
