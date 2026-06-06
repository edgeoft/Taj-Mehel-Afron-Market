import { Card, Divider, Flex } from '@mantine/core';

import MapIframe from '@/components/common/MapIframe';
import { CONTACT_US_DETAILS, GOOGLE_MAP_URL } from '@/static/contact';
import DetailInfo from './DetailInfo';
import { Fragment } from 'react';

type Props = {};

const ContactUsDetail = ({}: Props) => {
  return (
    <Card withBorder p={0} className="rounded-none border" flex={1}>
      <Flex direction={'column'} justify={'space-between'}>
        <MapIframe mapIframeSrc={GOOGLE_MAP_URL} />

        <Flex
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          gap={16}
          p={24}
        >
          {CONTACT_US_DETAILS.map((contactDetail, index) => (
            <Fragment key={contactDetail?.id}>
              <DetailInfo contactDetail={contactDetail} />
              {index + 1 !== CONTACT_US_DETAILS.length ? (
                <>
                  <Divider visibleFrom="md" orientation={'vertical'} />{' '}
                  <Divider w={'100%'} hiddenFrom="md" />
                </>
              ) : null}
            </Fragment>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default ContactUsDetail;
