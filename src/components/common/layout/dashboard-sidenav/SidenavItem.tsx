'use client';
import { Flex, Text } from '@mantine/core';
import { usePathname } from 'next/navigation';

import { getIconFromText } from '@/utils/icon';

type Props = {
  label: string;
  icon: string;
  link?: string;
};

const SidenavItem = ({ label, icon, link }: Props) => {
  const pathname = usePathname();

  const isActive = pathname.includes(`/accounts/${link}`);

  const iconComponent = getIconFromText(icon, {
    width: 24,
    height: 24,
    weight: isActive ? 'bold' : 'regular',
  });

  return (
    <Flex
      px={16}
      py={8}
      gap={16}
      align={'center'}
      className="cursor-pointer sidenavItem-container"
      c={isActive ? 'primary' : 'neutral.9'}
      bg={isActive ? '#FFEFB8' : 'transparent'}
      fw={isActive ? 700 : 400}
    >
      <Flex className="flex-shrink-0">{iconComponent}</Flex>
      <Text className="sidenavItem-container-text" fw={isActive ? 700 : 400}>
        {label}
      </Text>
    </Flex>
  );
};

export default SidenavItem;
