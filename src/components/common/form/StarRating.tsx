import { Rating, RatingProps } from '@mantine/core';
import { Star } from '@phosphor-icons/react/dist/ssr';

interface Props extends RatingProps {
  iconWidth?: number;
  iconHeight?: number;
}

const StarRating = ({ value, ...props }: Props) => {
  return (
    <Rating
      value={value}
      {...props}
      fractions={2.5}
      emptySymbol={
        <Star
          width={props.iconWidth ?? 16}
          height={props.iconHeight ?? 16}
          color="#FFBA38"
        />
      }
      fullSymbol={
        <Star
          weight="fill"
          width={props.iconWidth ?? 16}
          height={props.iconHeight ?? 16}
          color="#FFBA38"
        />
      }
    />
  );
};

export default StarRating;
