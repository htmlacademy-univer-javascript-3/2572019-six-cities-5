import {OfferShort} from '../../../types/offers/offer-short.ts';
import PremiumSign from '../../premium-sign/premium-sign.tsx';
import BookmarkButton from '../../bookmark-button/bookmark-button.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';
import Rating from '../../rating/rating.tsx';
import OfferCardPrice from './offer-card-price.tsx';
import OfferCardTitle from './offer-card-title.tsx';
import {useOfferCard} from '../../../hooks/use-offer-card.ts';
import {OfferCardVariants} from '../../../types/variants.ts';

type PlaceCardProps = {
  placeShortInfo: OfferShort;
  variant: OfferCardVariants;
}

function OfferCard({placeShortInfo, variant}: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage
  } = placeShortInfo;

  const {
    placeCardClassName,
    cardInfoClassName,
    imageWrapperClassName,
    imageWidth,
    imageHeight
  } = useOfferCard({variant});

  return (
    <article className={placeCardClassName}>
      <PremiumSign show={isPremium} variant={'card'}/>
      <div className={imageWrapperClassName}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cardInfoClassName}>
        <div className="place-card__price-wrapper">
          <OfferCardPrice price={price}/>
          <BookmarkButton inFavorites={isFavorite} variant={'card'}/>
        </div>
        <Rating value={rating} variant={'card'}/>
        <OfferCardTitle type={type} name={title} id={id}/>
      </div>
    </article>
  );
}

export default OfferCard;
