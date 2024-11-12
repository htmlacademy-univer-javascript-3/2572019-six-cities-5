import ReviewForm from '../review-form/review-form.tsx';
import OfferReviewItem from './offer-review-item.tsx';
import {Reviews} from '../../types/review.ts';

type OfferReviewsProps = {
  reviews: Reviews;
}

function OfferReviews({reviews}: OfferReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem item={review} key={review.id}/>
        ))}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default OfferReviews;
