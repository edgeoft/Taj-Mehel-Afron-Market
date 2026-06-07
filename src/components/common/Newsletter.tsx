import { Box, Container, Flex, Text, Title } from '@mantine/core';
import NewsletterInput from './form/NewsletterInput';

type Props = {
  bg?: string;
};

const Newsletter = ({ bg }: Props) => {
  return (
    <Box bg={`${bg ?? 'neutral.2'}`}>
      <Container className="padding-y-72">
        <Flex
          justify={'space-between'}
          direction={{ base: 'column', lg: 'row' }}
          gap={32}
          align={{ base: 'flex-start', lg: 'center' }}
        >
          <Box>
            <Title order={4} c={'orange'}>
              10% off your first order
            </Title>

            <Title order={2} className="heading-1" c={'primary'} mt={4}>
              Join the Namaste Newsletter
            </Title>

            <Text className="body-1" c={'neutral.7'} mt={12}>
              Get weekly offers on spices, rice, snacks and new arrivals across
              Helsinki and Uusimaa.
            </Text>
          </Box>

          <NewsletterInput placeholder="Enter your email address" />
        </Flex>
      </Container>
    </Box>
  );
};

export default Newsletter;
