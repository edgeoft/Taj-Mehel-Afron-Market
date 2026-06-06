export type TFooterLinkItem = {
  title: string;
  link?: string;
};

export type TFooterCategoryLinks = {
  category: string;
  subCategories: TFooterLinkItem[];
};

export type TFooterBottomLinks = {
  title: string;
  subLinks: TFooterLinkItem[];
};

export type TFooterSocial = {
  SocialLogoComponent: JSX.Element;
  link: string;
};
