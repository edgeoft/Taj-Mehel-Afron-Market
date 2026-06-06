import { Card, Flex, Title } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { getIconFromText } from '@/utils/icon';

import '@/styles/components/card/__accountCard.scss';

type Props = {
  label: string;
  icon: string;
  link?: string;
};

const AccountCard = ({ label, icon, link }: Props) => {
  const iconComponent = getIconFromText(icon, {
    width: 24,
    height: 24,
    color: '#454545',
  });

  return (
    <Link
      passHref
      href={link ? `/accounts/${link}` : '#'}
      className="accountCard-container"
    >
      <Card
        w={{ base: '100%', md: 211 }}
        bg={{ base: 'transparent', md: 'neutral.3' }}
        className="accountCard-container-card"
      >
        <Flex justify={'space-between'} w={'100%'} align={'center'}>
          <Flex
            gap={16}
            justify={{ base: 'flex-start', md: 'center' }}
            align={'center'}
          >
            {iconComponent}
            <Title order={4} c={'neutral.9'}>
              {label}
            </Title>
          </Flex>

          <CaretRight
            color="#454545"
            width={20}
            height={20}
            className="caret-right"
          />
        </Flex>
      </Card>
    </Link>
  );
};

export default AccountCard;
