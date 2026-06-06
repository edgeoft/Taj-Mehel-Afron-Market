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
              10% off on Subcription
            </Title>

            <Title order={2} className="heading-1" c={'primary'} mt={4}>
              Join our Newsletter Today
            </Title>

            <Text className="body-1" c={'neutral.7'} mt={12}>
              Get exciting news and updates of the offers available weekly
            </Text>
          </Box>

          <NewsletterInput placeholder="Enter your email address" />
        </Flex>
      </Container>
    </Box>
  );
};

export default Newsletter;
