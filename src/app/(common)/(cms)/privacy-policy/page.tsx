import BreadCrumb from '@/components/common/Breadcrumb';
import CMSContent from '@/components/common/CMSContent';
import { PRIVACY_POLICY } from '@/static/cms';
import { Flex } from '@mantine/core';

type Props = {};

const PrivacyPolicyPage = ({}: Props) => {
  const breadCrumb = [
    { id: '1', title: 'Home', href: '/' },
    { id: '2', title: 'Privacy Policy' },
  ];

  return (
    <Flex direction={'column'} gap={{ base: 24, md: 56 }}>
      <BreadCrumb data={breadCrumb} />

      <CMSContent title="Privacy Policy" description={PRIVACY_POLICY} />
    </Flex>
  );
};

export default PrivacyPolicyPage;
