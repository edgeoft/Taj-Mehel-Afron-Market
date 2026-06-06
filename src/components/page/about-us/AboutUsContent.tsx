import { images } from '@/assets';
import { Box, Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import AboutUsTitleDescContent from './AboutUsTitleDescContent';

type Props = {};

const AboutUsContent = ({}: Props) => {
  return (
    <SimpleGrid
      cols={{ base: 1, lg: 2 }}
      spacing={{ base: 40, sm: 40 }}
      verticalSpacing={{ base: 30, md: 48, lg: 104 }}
    >
      <Box className="align-self-center">
        <Flex
          direction={'column'}
          gap={16}
          justify={'space-between'}
          align={{ base: 'center', lg: 'flex-start' }}
          w={'100%'}
        >
          <AboutUsTitleDescContent
            title="ABOUT US"
            description="Discover the Perfect Blend of Style, Innovation, and Comfort at FurniTech"
          />
          <Box className="aboutUs-imageContainer">
            <Image
              src={images.aboutUsImg}
              alt={'requirement-banner'}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </Box>
          <Text className="body-1" c={'neutral.7'}>
            Welcome to FurniTech, your one-stop destination for high-quality
            furniture, electronics, and clothing in Nepal. At FurniTech, we are
            committed to providing you with a seamless shopping experience,
            combining the best of style, technology, and comfort under one roof.
          </Text>
          <Text className="body-1" c={'neutral.7'}>
            At FurniTech, our mission is to enhance your living spaces and
            lifestyle with products that blend functionality, design, and
            innovation. We believe that your home should reflect your
            personality and meet your everyday needs, whether it’s the perfect
            sofa for your living room, the latest electronics for your home, or
            stylish clothing that suits your taste.
          </Text>
        </Flex>
      </Box>
      <Box visibleFrom="lg">
        <Image
          src={images.aboutUsImg}
          alt={'requirement-banner'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          style={{
            maxHeight: 444,
          }}
        />
      </Box>
      <Box visibleFrom="lg">
        <Image
          src={images.ourVisionImg}
          alt={'requirement-banner'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          style={{
            maxHeight: 444,
          }}
        />
      </Box>
      <Box className="align-self-center">
        <Flex
          direction={'column'}
          gap={16}
          justify={'space-between'}
          align={{ base: 'center', lg: 'flex-start' }}
          w={'100%'}
        >
          <AboutUsTitleDescContent
            title="OUR VISION"
            description="Pioneering a New Era of Lifestyle Enhancement through Quality, Innovation, and Unmatched Convenience in E-Commerce"
          />
          <Box className="aboutUs-imageContainer">
            <Image
              src={images.ourVisionImg}
              alt={'requirement-banner'}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </Box>
          <Text className="body-1" c={'neutral.7'}>
            Our vision is to become Nepal’s leading e-commerce platform, known
            for offering a diverse range of high-quality products and
            exceptional customer service. We aim to bring the best global and
            local brands to your doorstep, making shopping easier, more
            convenient, and enjoyable.
          </Text>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default AboutUsContent;
