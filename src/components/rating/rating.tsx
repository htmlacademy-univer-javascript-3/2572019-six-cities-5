
import {useRating} from '../../hooks/use-rating.ts';
import {RatingVariants} from '../../types/variants.ts';

type RatingProps = {
  value: number;
  variant: RatingVariants;
  children?: JSX.Element;
}

function Rating({ value, variant, children } : RatingProps) {
  const {ratingClassName, starsClassName, width} = useRating({value, variant});
  return (
    <div className={ratingClassName}>
      <div className={starsClassName}>
        <span style={{ width }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default Rating;
