type PlaceCardPriceProps = {
    price: number;
    currencySymbol?: string;
  }

function OfferCardPrice({ price, currencySymbol = '€' } : PlaceCardPriceProps) : JSX.Element {
  return (
    <div className="place-card__price">
      <b className="place-card__price-value">{`${currencySymbol}${price}`}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
  );
}

export default OfferCardPrice;
