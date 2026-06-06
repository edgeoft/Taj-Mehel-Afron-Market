'use client';

import { Flex, Title } from '@mantine/core';
import Wysiwyg from './Wyswyg';

type Props = {
  title: string;
  description: string;
};

const CMSContent = ({ title, description }: Props) => {
  return (
    <Flex
      justify={'center'}
      direction={'column'}
      align={'center'}
      gap={{ base: 24, md: 56 }}
    >
      <Title order={2} c={'neutral.10'} className="cmsContent-title">
        {title}
      </Title>

      <Wysiwyg content={description} centerAligned />
    </Flex>
  );
};

export default CMSContent;
