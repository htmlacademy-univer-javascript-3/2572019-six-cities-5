import {OfferShort} from '../../types/offers/offer-short.ts';
import PremiumSign from '../premium-sign/premium-sign.tsx';
import PlaceCardRating from '../place-card/place-card-rating.tsx';
import PlaceCardTitle from '../place-card/place-card-title.tsx';
import PlaceCardPrice from '../place-card/place-card-price.tsx';
import FavoriteMarkButton from '../favorite-mark-button/favorite-mark-button.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type FavoritePlaceCardProps = {
  placeShortInfo: OfferShort;
}

function FavoritePlaceCard({ placeShortInfo } : FavoritePlaceCardProps) : JSX.Element {
  const {
    id,
    type,
    title,
    price,
    previewImage,
    rating,
    isFavorite,
    isPremium} = placeShortInfo;

  return (
    <article key={id} className="favorites__card place-card">
      <PremiumSign show={isPremium}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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

export default FavoritePlaceCard;
