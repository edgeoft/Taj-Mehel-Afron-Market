import { Box, Container, Flex } from '@mantine/core';

import BreadCrumb from '@/components/common/Breadcrumb';
import Newsletter from '@/components/common/Newsletter';
import ContactUsDetail from '@/components/page/contact-us/ContactUsDetail';
import ContactUsForm from '@/components/page/contact-us/ContactUsForm';

type Props = {};

const ContactUsPage = ({}: Props) => {
  const breadCrumb = [
    { id: '1', title: 'Home', href: '/' },
    { id: '2', title: 'Contact Us' },
  ];
  return (
    <>
      <Container className="padding-b-72">
        <Flex direction={'column'} gap={8}>
          <BreadCrumb data={breadCrumb} />

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 24, xl: 32 }}
          >
            <ContactUsForm />

            <ContactUsDetail />
          </Flex>
        </Flex>
      </Container>

      <Newsletter />
    </>
  );
};

export default ContactUsPage;
