import { images } from '@/assets';
import { Box, Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import AboutUsTitleDescContent from './AboutUsTitleDescContent';

const AboutUsContent = () => {
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
            description="Authentic Afro-Asian Groceries in the Heart of Vantaa"
          />
          <Box className="aboutUs-imageContainer">
            <Image
              src={images.aboutUsImg}
              alt="Taj Mehal Afro-Asian Market store"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </Box>
          <Text className="body-1" c={'neutral.7'}>
            Welcome to Taj Mehal Afro-Asian Market, your trusted Afro-Asian
            grocery store at Tikkuraitti 13 in Vantaa. We bring the flavours of
            home to Finland with a curated selection of spices, rice, lentils,
            snacks, pickles and everyday essentials from across Africa and Asia.
          </Text>
          <Text className="body-1" c={'neutral.7'}>
            Our mission is to make authentic Afro-Asian groceries accessible and
            convenient for families across Helsinki, Espoo, Vantaa and Uusimaa.
            Whether you need basmati for biryani, fresh masalas for curry, or
            your favourite snacks, we are here to serve you with care and
            quality.
          </Text>
        </Flex>
      </Box>
      <Box visibleFrom="lg">
        <Image
          src={images.aboutUsImg}
          alt="Taj Mehal Afro-Asian Market store interior"
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
          alt="Fresh Afro-Asian groceries at Taj Mehal Afro-Asian Market"
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
            description="Bringing Afro-Asian Flavours Closer to Every Home in Finland"
          />
          <Box className="aboutUs-imageContainer">
            <Image
              src={images.ourVisionImg}
              alt="Afro-Asian spices and groceries"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </Box>
          <Text className="body-1" c={'neutral.7'}>
            Our vision is to become the leading Afro-Asian grocery destination
            in Finland — known for authentic products, reliable delivery and
            warm, personal service. We aim to connect diverse communities and
            food lovers with the ingredients that make every meal feel like
            home.
          </Text>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default AboutUsContent;
