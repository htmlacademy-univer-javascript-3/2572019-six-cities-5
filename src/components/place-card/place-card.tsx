import {OfferShort} from '../../types/offers/offer-short.ts';
import PremiumSign from '../premium-sign/premium-sign.tsx';
import PlaceCardRating from './place-card-rating.tsx';
import PlaceCardTitle from './place-card-title.tsx';
import PlaceCardPrice from './place-card-price.tsx';
import FavoriteMarkButton from '../favorite-mark-button/favorite-mark-button.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type PlaceCardProps = {
  placesShortInfo: OfferShort;
}

function PlaceCard({ placesShortInfo } : PlaceCardProps) : JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage } = placesShortInfo;

  return (
    <article className="cities__card place-card">
      <PremiumSign show={isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer }/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <PlaceCardPrice price={price}/>
          <FavoriteMarkButton inFavorites={isFavorite}/>
        </div>
        <PlaceCardRating value={rating}/>
        <PlaceCardTitle type={type} name={title} id={id}/>
      </div>
    </article>
  );
}

export default PlaceCard;
