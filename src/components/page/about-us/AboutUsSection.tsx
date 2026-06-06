import BreadCrumb from '@/components/common/Breadcrumb';
import Newsletter from '@/components/common/Newsletter';
import { aboutUsBreadCrumb } from '@/static/aboutUs';
import { Box, Container } from '@mantine/core';
import FeatureList from '../home/FeatureList';
import AboutUsContent from './AboutUsContent';
// import LogosList from './LogosList';
import CustomerReviewList from './CustomerReviewList';

type Props = {};

const AboutUsSection = ({}: Props) => {
  return (
    <>
      <Container>
        <Box my={{ base: 14, lg: 24 }}>
          <BreadCrumb data={[...aboutUsBreadCrumb]} />
        </Box>
        <AboutUsContent />
      </Container>
      <FeatureList
        className="padding-b-72"
        title="WHY CHOOSE US"
        description="Experience Quality, Value, and Unmatched Service"
      />
      <CustomerReviewList />
      {/* <LogosList /> */}
      <Newsletter bg={'neutral.3'} />
    </>
  );
};

export default AboutUsSection;
