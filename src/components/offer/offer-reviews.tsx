import Rating from '../rating/rating.tsx';
import CommentSubmissionForm from '../comment-submission-form/comment-submission-form.tsx';
import {mockReviews} from '../../mocks/reviews.ts';
import {formatDate} from '../../utils.ts';

function OfferReviews() {
  const reviews = mockReviews;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map(({id, user, date, comment, rating}) => (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{user.name}</span>
            </div>
            <div className="reviews__info">
              <Rating value={rating} variant={'review'}/>
              <p className="reviews__text">{comment}</p>
              <time className="reviews__time" dateTime={date}>
                {formatDate(date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <CommentSubmissionForm/>
    </section>
  );
}

export default OfferReviews;
