import { CarouselSlide } from '@mantine/carousel';
import { Card, Container } from '@mantine/core';

import CardSlider from '@/components/common/slider/CardSlider';
import { logos } from '@/static/aboutUs';
import Image from 'next/image';

const LogosList = () => {
  return (
    <Container bg={'#FFFBEB'}>
      <CardSlider
        slideSize="11.53%"
        withControls={false}
        dragFree={true}
        py={40}
      >
        {logos.map((logo) => (
          <CarouselSlide key={logo?.id}>
            <Card
              p={0}
              miw={80}
              maw={80}
              mih={80}
              mah={80}
              bd={'1px solid blue'}
            >
              <Image
                src={logo.img}
                alt={'requirement-banner'}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
              />
            </Card>
          </CarouselSlide>
        ))}
      </CardSlider>
    </Container>
  );
};

export default LogosList;
