export type TSubCatItem = {
  title: string;
};

export type TNavbarMegaMenuItem = {
  title: string;
  slug: string;
  subCategories: TSubCatItem[];
};
