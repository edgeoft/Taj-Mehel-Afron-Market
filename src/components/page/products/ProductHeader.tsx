'use client';

import { Box, Flex, Text } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';

import BorderlessSelect from '@/components/common/form/BorderlessSelect';
import { sorting } from '@/static/product';

type Props = {};

const ProductHeader = ({}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'featured';

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(`sortBy`, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <Flex justify={'space-between'} gap={16} wrap={'wrap'} align={'center'}>
      <Text className="body-2" c={'neutral.6'}>
        Showing{' '}
        <Box component="span" fw={'bold'}>
          123
        </Box>{' '}
        results for{' '}
        <Box component="span" fw={'bold'}>
          &apos;Groceries&apos;
        </Box>
      </Text>

      <Flex gap={16}>
        <BorderlessSelect
          label="Sort By :"
          value={sortBy}
          data={sorting}
          onChange={(value) => handleSortChange(value || '')}
        />
      </Flex>
    </Flex>
  );
};

export default ProductHeader;
