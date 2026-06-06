'use client';
import { Box, Flex } from '@mantine/core';

type Props = {
  content: string;
  maxWidth?: string;
  centerAligned?: boolean;
  className?: string;
};

const Wysiwyg = ({
  content,
  maxWidth,
  centerAligned = false,
  className,
}: Props) => {
  return (
    <Flex justify={centerAligned ? 'center' : 'flex-start'}>
      <Box className={className}>
        <Box
          dangerouslySetInnerHTML={{ __html: content }}
          className={`wysiwyg_Box`}
          maw={maxWidth ? '100%' : '872'}
          w={'100%'}
        />
      </Box>
    </Flex>
  );
};

export default Wysiwyg;
