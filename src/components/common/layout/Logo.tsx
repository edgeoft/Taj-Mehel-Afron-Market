import { images } from '@/assets';
import { Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_WIDTH = 1196;
const LOGO_HEIGHT = 896;

const BRAND_NAVY = '#0D1F3D';
const BRAND_MAROON = '#701C1C';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withLink?: boolean;
};

const sizeMap = {
  sm: { logoHeight: 32, titleSize: 14, taglineSize: 10 },
  md: { logoHeight: 40, titleSize: 18, taglineSize: 11 },
  lg: { logoHeight: 48, titleSize: 22, taglineSize: 13 },
};

const Logo = ({ size = 'md', className, withLink = true }: Props) => {
  const { logoHeight, titleSize, taglineSize } = sizeMap[size];
  const logoWidth = Math.round(logoHeight * (LOGO_WIDTH / LOGO_HEIGHT));

  const content = (
    <Flex
      align="center"
      gap={{ base: 8, sm: 10 }}
      className={`site-brand site-brand--${size} ${className ?? ''}`}
    >
      <Image
        src={images.mainLogo}
        alt="Taj Mehel Afro-Asian Market"
        width={logoWidth}
        height={logoHeight}
        priority={size === 'md'}
        className="site-brand__logo"
      />
      <Stack gap={2} className="site-brand__text">
        <Text
          component="span"
          fw={700}
          fz={titleSize}
          c={BRAND_NAVY}
          lh={1.15}
          className="site-brand__name"
        >
          Taj Mehel
        </Text>
        <Text
          component="span"
          fw={600}
          fz={taglineSize}
          c={BRAND_MAROON}
          lh={1.2}
          className="site-brand__tagline"
        >
          Afro Asian Market
        </Text>
      </Stack>
    </Flex>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link href="/" className="text-logo-link">
      {content}
    </Link>
  );
};

export default Logo;
