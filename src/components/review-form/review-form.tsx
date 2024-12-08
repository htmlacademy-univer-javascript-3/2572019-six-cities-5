import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewRatingInput from './review-rating-input.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {postReviewAction} from '../../store/api-actions.ts';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector((state) => state.offerDetailed?.id);
  const [comment, setComment] = useState('');
  const [ratingValue, setRatingValue] = useState(NaN);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => setRatingValue(Number(e.target.value));
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (offerId) {
      dispatch(postReviewAction({reviewData: {comment, rating: ratingValue}, offerId}));
    }

    return false;
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingInput ratingValue={ratingValue} onRateChange={handleRatingChange}/>
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
          at least <b className="reviews__text-amount">50</b> and no more than
          <b className="reviews__text-amount"> 300 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(comment.length >= 50 && !isNaN(ratingValue) && comment.length <= 300)}
        >
          Submit
        </button>
      </div>
    </form>

  );
}

export default ReviewForm;
