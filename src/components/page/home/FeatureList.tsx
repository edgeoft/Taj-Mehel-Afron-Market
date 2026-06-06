import { CarouselSlide } from '@mantine/carousel';
import { Container, Stack, Title } from '@mantine/core';

import FeatureCard from '@/components/common/card/FeatureCard';
import CardSlider from '@/components/common/slider/CardSlider';
import { features } from '@/static/home';
import AboutUsTitleDescContent from '../about-us/AboutUsTitleDescContent';

type TFeatureListProps = {
  title?: string;
  description?: string;
  className?: string;
};

const FeatureList = (props: TFeatureListProps) => {
  return (
    <Container className={`padding-t-72 ${props?.className ?? ''}`}>
      {props.title && props.description && (
        <AboutUsTitleDescContent
          title={props.title}
          description={props.description}
          align={'center'}
          mb={{ base: 24, md: 48 }}
        />
      )}
      <CardSlider slideSize="20%" withControls={false} dragFree={true}>
        {features.map((feature) => (
          <CarouselSlide key={feature?.id}>
            <FeatureCard
              title={feature?.title}
              description={feature?.description}
              icon={feature?.icon}
            />
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
};

export default FeatureList;
