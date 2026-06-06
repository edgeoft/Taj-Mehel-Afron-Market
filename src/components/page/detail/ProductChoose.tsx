'use client';

import { Box, Flex, Text } from '@mantine/core';
import { useState } from 'react';

type TProductChooseProps = {
  title: string;
  data: TProductChoose[];
};

const ProductChoose = ({ title, data }: TProductChooseProps) => {
  const [activeItem, setActiveItem] = useState(data[0]);

  return (
    <Flex
      justify={{ base: 'flex-start', md: 'space-between' }}
      align={'flex-start'}
      direction={{ base: 'row', md: 'column' }}
      gap={{ base: 12, md: 8 }}
      mb={12}
    >
      <Text
        c={'neutral.9'}
        className="productInfo-infoTitle"
      >{`${title}`}</Text>
      <Flex align={'center'} wrap={'wrap'} gap={8}>
        {data.map((item, index) => (
          <Flex
            key={index}
            justify={'flex-start'}
            align={'center'}
            direction={'row'}
            gap={12}
            onClick={() => setActiveItem(item)}
            className="cursor-pointer"
          >
            <Flex
              justify={'space-between'}
              align={'center'}
              gap={8}
              bd={
                activeItem.name === item.name
                  ? '2px solid orange.6'
                  : '1px solid neutral.5'
              }
              px={8}
              py={4}
              h={{ base: 27, md: 30 }}
            >
              {item.color && (
                <Box w={14} h={14} className="rounded" bg={item.color} />
              )}
              <Text
                className={`productInfo-selectItem ${activeItem.name === item.name ? 'font-bold' : ''}`}
                c={activeItem.name === item.name ? 'neutral.7' : 'neutral.5'}
              >
                {item.name}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProductChoose;
