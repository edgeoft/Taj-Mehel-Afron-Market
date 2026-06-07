import { Box, Button, Container, Flex, Text, Title } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

import { images } from '@/assets';

import '@/styles/components/__requirementBanner.scss';

const RequirementBanner = () => {
  return (
    <Container className="padding-t-72">
      <Box pos={'relative'} className="requirementBanner-container">
        <Image
          src={images.requirementBanner}
          alt="Special grocery request banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto mantine-visible-from-sm"
        />

        <Image
          src={images.requirementBannerMobile}
          alt="Special grocery request banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto mantine-hidden-from-sm requirementBanner-container-mobileImg"
        />

        <Flex
          pos={'absolute'}
          gap={{ base: 16, sm: 32 }}
          direction={'column'}
          top={{ base: '32px', md: '48px', xl: '108px' }}
          left={{ base: '16px', md: '48px', xl: '80px' }}
          right={16}
        >
          <Box>
            <Title order={6} c={'orange'}>
              Can&apos;t find what you need?
            </Title>

            <Title
              order={2}
              mt={4}
              c={'primary'}
              className="requirementBanner-container-heading-2"
            >
              Request a product
            </Title>

            <Text
              className="body-2"
              mt={4}
              c={'neutral.7'}
              w={{ base: '100%', sm: 433 }}
            >
              Tell us which Indian grocery item you are looking for and we will
              do our best to source it for you across Helsinki and Uusimaa.
            </Text>
          </Box>

          <Button
            variant="outline"
            rightSection={<CaretRight aria-hidden />}
            className="w-fit"
            aria-label="Send your product request"
          >
            Send your request
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default RequirementBanner;
