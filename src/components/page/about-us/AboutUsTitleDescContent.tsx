import { Flex, MantineSpacing, StyleProp, Title } from '@mantine/core';

type Props = {
  title?: string;
  description?: string;
  align?: string;
  mb?: StyleProp<MantineSpacing>;
};

const AboutUsTitleDescContent = ({ title, description, align, mb }: Props) => {
  return (
    <Flex
      gap={8}
      direction={'column'}
      justify={'space-between'}
      align={align ?? { base: 'center', lg: 'flex-start' }}
      w={'100%'}
      mb={mb ?? 0}
      // pr={{ base: 0, lg: 24 }}
    >
      <Title order={2} className="body-2" c={'secondary'}>
        {title}
      </Title>
      <Title
        order={3}
        className="heading-2 aboutUs-text-align"
        c={'neutral.10'}
      >
        {description}
      </Title>
    </Flex>
  );
};

export default AboutUsTitleDescContent;
