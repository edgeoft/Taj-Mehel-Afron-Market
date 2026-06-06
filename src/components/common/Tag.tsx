import { Box, Text } from '@mantine/core';

type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  return (
    <Box bg={'secondary'}>
      <Text className="tag-text" c={'neutral.0'} px={8} py={4}>
        {text}
      </Text>
    </Box>
  );
};

export default Tag;
