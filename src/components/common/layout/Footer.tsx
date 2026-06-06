import { images } from '@/assets';
import {
  FOOTER_BOTTOM_LINKS,
  FOOTER_CATEGORY_LINKS,
  FOOTER_SOCIAL,
} from '@/static/footerLinks';
import { Box, Container, Flex, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container className="footer-container">
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify={{ md: 'space-between' }}
            gap={{ base: 24, xs: 59, md: 143 }}
          >
            <Flex
              direction={{ base: 'column', xs: 'row', sm: 'column' }}
              maw={{ base: '100%', sm: 237 }}
              gap={{ base: 16, md: 80 }}
              justify={{
                base: 'flex-start',
                xs: 'space-between',
                sm: 'flex-start',
              }}
              className="footer-container-left"
            >
              <Box maw={{ base: '100%', xs: 237 }}>
                <Link href="/">
                  <Image
                    src={images.mainLogo}
                    alt="Furniture Logo"
                    width={156.97}
                    height={48}
                  />
                </Link>
                <Text className="body-2 text-left" pt={16} c={'neutral.7'}>
                  Where style meets technology, elevating every corner of your
                  home
                </Text>
              </Box>
              <Box>
                <Text
                  className="body-2"
                  c={'neutral.10'}
                  pb={{ base: 8, xs: 16 }}
                >
                  Follow us on social media
                </Text>
                <ul className="footer-container-social">
                  {FOOTER_SOCIAL.map(({ link, SocialLogoComponent }, index) => (
                    <li key={index}>
                      <Link
                        href={link}
                        target="_blank"
                        passHref
                        rel="noopener noreferrer"
                      >
                        {SocialLogoComponent}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Flex>

            <Box className="footer-container-right">
              <SimpleGrid
                cols={{ base: 2, xs: 3, sm: 3, lg: 4 }}
                spacing={{ base: 24, sm: 32, md: 60 }}
                verticalSpacing={{ base: 24, xs: 40 }}
                mb={{ base: 24, xs: 40 }}
              >
                {FOOTER_CATEGORY_LINKS.map(
                  ({ category, subCategories }, index) => (
                    <Box key={index}>
                      <Text
                        className="body-2 footer-container-right-title"
                        c={'neutral.10'}
                        mb={12}
                      >
                        {category}
                      </Text>
                      {subCategories.map(({ title }, innerIndex) => (
                        <Link
                          href={`/products?categoryId=${title}`}
                          key={innerIndex}
                          passHref
                        >
                          <Text
                            className="body-2 footer-container-right-link"
                            mb={8}
                            lineClamp={1}
                          >
                            {title}
                          </Text>
                        </Link>
                      ))}
                    </Box>
                  )
                )}
              </SimpleGrid>

              <SimpleGrid
                cols={{ base: 2, xs: 3, sm: 2, lg: 4 }}
                spacing={{ base: 24, sm: 32, md: 60 }}
                verticalSpacing={24}
              >
                {FOOTER_BOTTOM_LINKS.map(({ title, subLinks }, index) => (
                  <Box key={index} style={{ minWidth: 'max-content' }}>
                    <Text
                      className="body-2 footer-container-right-title"
                      c={'neutral.10'}
                      mb={12}
                    >
                      {title}
                    </Text>
                    {subLinks.map(({ title, link }, innerIndex) => (
                      <Text
                        className="body-2 footer-container-right-link"
                        c={'neutral.7'}
                        mb={8}
                        key={innerIndex}
                      >
                        {link ? <Link href={link}>{title}</Link> : title}
                      </Text>
                    ))}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>

          <Box className="footer-container-copyright">
            <Text className="body-2">&copy;2024. All Rights Reserved.</Text>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
