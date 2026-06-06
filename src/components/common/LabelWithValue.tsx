import { Group, Text, Title } from '@mantine/core';

type Props = {
  label: string;
  value: string;
};

const LabelWithValue = ({ label, value }: Props) => {
  return (
    <Group gap={8}>
      <Text className="body-2" c={'neutral.8'}>
        {label}
      </Text>

      <Title order={6} c={'neutral.8'}>
        {value}
      </Title>
    </Group>
  );
};

export default LabelWithValue;
