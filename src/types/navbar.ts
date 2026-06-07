export type TSubCatItem = {
  title: string;
};

export type TNavbarMegaMenuItem = {
  title: string;
  slug: string;
  description: string;
  subCategories: TSubCatItem[];
};
