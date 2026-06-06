import { ContactDetail } from '@/types/contact';
import { Flex, Text } from '@mantine/core';
import Link from 'next/link';
import { Fragment } from 'react';

type Props = {
  contactDetail: ContactDetail;
};

const DetailInfo = ({ contactDetail }: Props) => {
  return (
    <Flex direction={'column'} gap={16} align={'center'} w={137}>
      <contactDetail.icon size={24} weight={'fill'} color={'#212121'} />

      <Text className="body-2 text-center" c={'neutral.7'}>
        {contactDetail?.value.map((val, index) => (
          <Fragment key={val?.data}>
            {val?.link ? <Link href={val?.link}>{val?.data}</Link> : val?.data}
            {index < contactDetail.value.length - 1 && ', '}
          </Fragment>
        ))}
      </Text>
    </Flex>
  );
};

export default DetailInfo;
