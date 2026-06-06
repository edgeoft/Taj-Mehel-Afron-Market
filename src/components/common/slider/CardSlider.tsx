import { ReactNode } from 'react';
import { Carousel } from '@mantine/carousel';
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';
import { CarouselProps } from '@mantine/carousel';

import '@/styles/components/slider/__cardSlider.scss';

interface Props extends CarouselProps {
  slideGap?: number;
  children: ReactNode;
}

const CardSlider = ({ slideGap = 24, children, ...props }: Props) => {
  return (
    <Carousel
      slideGap={{ base: 12, sm: slideGap }}
      containScroll="trimSnaps"
      align="start"
      nextControlIcon={<CaretRight size={18} />}
      previousControlIcon={<CaretLeft size={18} />}
      className="card-slider__carousel"
      controlsOffset={4}
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default CardSlider;
