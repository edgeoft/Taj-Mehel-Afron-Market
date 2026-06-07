import { Card } from '@mantine/core';
import Image from 'next/image';

type TProductImageCardProps = {
  index: number;
  title: string;
  image: string;
  activeImageIdx: number;
  setActiveImageIdx: (data: number) => void;
};

const ProductImageCard = ({
  image,
  title,
  index,
  activeImageIdx,
  setActiveImageIdx,
}: TProductImageCardProps) => {
  return (
    <Card
      p={0}
      w={100}
      h={75}
      radius={0}
      bd={activeImageIdx === index ? '2px solid #FF9933' : 'none'}
      onClick={() => {
        setActiveImageIdx(index);
      }}
      className="cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={75}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
    </Card>
  );
};

export default ProductImageCard;
