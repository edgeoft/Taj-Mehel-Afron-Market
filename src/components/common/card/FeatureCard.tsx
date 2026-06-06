import { Card, Flex, Text, Title } from '@mantine/core';
import {
  CreditCard,
  CurrencyCircleDollar,
  Laptop,
  ThumbsUp,
  Truck,
} from '@phosphor-icons/react/dist/ssr';

type Props = {
  title: string;
  description: string;
  icon: string;
};

const RenderIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'currency-circle-dollar':
      return <CurrencyCircleDollar color="#212121" width={32} height={32} />;
    case 'truck':
      return <Truck color="#212121" width={32} height={32} />;
    case 'credit-card':
      return <CreditCard color="#212121" width={32} height={32} />;
    case 'laptop':
      return <Laptop color="#212121" width={32} height={32} />;
    case 'thumbs-up':
      return <ThumbsUp color="#212121" width={32} height={32} />;
  }
  return null;
};

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <Card p={0} w={213}>
      <Flex direction={'column'} gap={12} align={'center'}>
        <RenderIcon icon={icon} />

        <Flex direction={'column'} gap={8}>
          <Title order={4} className="text-center" fw={'bold'} c={'neutral.10'}>
            {title}
          </Title>
          <Text className="body-2 text-center" c={'neutral.7'}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default FeatureCard;
