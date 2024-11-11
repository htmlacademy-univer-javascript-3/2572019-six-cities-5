import {ChangeEvent, useState} from 'react';
import ReviewRatingInput from './review-rating-input.tsx';

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [ratingValue, setRatingValue] = useState(NaN);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => setRatingValue(Number(e.target.value));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingInput ratingValue={ratingValue} onRateChange={handleRatingChange} />
      <textarea
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(comment.length >= 50 && !isNaN(ratingValue))}
        >
          Submit
        </button>
      </div>
    </form>

  );
}

export default ReviewForm;
