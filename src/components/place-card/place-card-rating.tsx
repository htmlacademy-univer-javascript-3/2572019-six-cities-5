type RatingProps = {
    value: number;
  }

function PlaceCardRating({ value } : RatingProps) : JSX.Element {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${20 * value}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default PlaceCardRating;
