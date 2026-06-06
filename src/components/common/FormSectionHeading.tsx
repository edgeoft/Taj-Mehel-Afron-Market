import { Divider, Stack, Title, TitleOrder } from '@mantine/core';

type Props = {
  title: string;
  order?: TitleOrder;
};

const FormSectionHeading = ({ title, order = 4 }: Props) => {
  return (
    <Stack gap={8}>
      <Title c={'neutral.9'} order={order}>
        {title}
      </Title>

      <Divider color={'neutral.3'} />
    </Stack>
  );
};

export default FormSectionHeading;
