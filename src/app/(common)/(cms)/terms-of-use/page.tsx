import BreadCrumb from '@/components/common/Breadcrumb';
import CMSContent from '@/components/common/CMSContent';
import { Flex } from '@mantine/core';

import { TERMS_OF_USE } from '@/static/cms';

type Props = {};

const PrivacyPolicyPage = ({}: Props) => {
  const breadCrumb = [
    { id: '1', title: 'Home', href: '/' },
    { id: '2', title: 'Terms Of Use' },
  ];

  return (
    <Flex direction={'column'} gap={{ base: 24, md: 56 }}>
      <BreadCrumb data={breadCrumb} />

      <CMSContent title="Terms Of Use" description={TERMS_OF_USE} />
    </Flex>
  );
};

export default PrivacyPolicyPage;
