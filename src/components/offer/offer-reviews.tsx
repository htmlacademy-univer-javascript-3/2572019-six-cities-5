import ReviewForm from '../review-form/review-form.tsx';
import OfferReviewItem from './offer-review-item.tsx';
import {Reviews} from '../../types/review.ts';
import {useAuthorization} from '../../hooks/use-authorization.ts';

type OfferReviewsProps = {
  reviews: Reviews;
  reviewsCount: number;
}

function OfferReviews({reviews, reviewsCount}: OfferReviewsProps) {
  const isAuthorized = useAuthorization();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem item={review} key={review.id}/>
        ))}
      </ul>
      {isAuthorized && <ReviewForm/>}
    </section>
  );
}

export default OfferReviews;
