export type Product = {
  id: number;
  name: string;
  category: string;
  image: string[];
  rating: number;
  price: string;
  discountedPrice?: string;
  discountPercent: number;
  noOfRating: number;
  description: string;
};
