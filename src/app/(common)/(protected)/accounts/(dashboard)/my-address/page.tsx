import FormSectionHeading from '@/components/common/FormSectionHeading';
import MyAddressList from '@/components/page/accounts/my-address/MyAddressList';
import { Card, Stack } from '@mantine/core';

type Props = {};

const MyAddressPage = ({}: Props) => {
  return (
    <Card withBorder w="100%" p={{ base: 16, md: 32 }} mih={'75vh'}>
      <Stack gap={24}>
        <FormSectionHeading title="My Address" order={3} />

        <MyAddressList />
      </Stack>
    </Card>
  );
};

export default MyAddressPage;
