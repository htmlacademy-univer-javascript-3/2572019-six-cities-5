import PremiumSign from '../premium-sign.tsx';
import BookmarkButton from '../bookmark-button.tsx';
import Rating from '../rating.tsx';
import OfferFeatures from './offer-features.tsx';
import OfferPrice from './offer-price.tsx';
import OfferInside from './offer-inside.tsx';
import OfferHost from './offer-host.tsx';
import OfferReviews from './offer-reviews.tsx';
import {DetailedOffer} from '../../types/offers/detailed-offer.ts';
import OfferGallery from './offer-gallery.tsx';
import {toggleOfferFavoriteStatus} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks/services/redux.ts';
import {memo} from 'react';

type OfferDetailsProps = {
  offer: DetailedOffer;
}

function OfferDetails({offer: currentOffer} : OfferDetailsProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch(toggleOfferFavoriteStatus(currentOffer));
  };

  return (
    <>
      <OfferGallery images={currentOffer.images}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <PremiumSign show={currentOffer.isPremium} variant={'full'}/>

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {currentOffer.title}
            </h1>
            <BookmarkButton variant={'full'} isFavorite={currentOffer.isFavorite} onClick={handleButtonClick}/>
          </div>

          <Rating value={currentOffer.rating} variant={'full'}>
            <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
          </Rating>
          <OfferFeatures type={currentOffer.type} maxAdults={currentOffer.maxAdults} bedrooms={currentOffer.bedrooms}/>
          <OfferPrice price={currentOffer.price} variant={'full'}/>
          <OfferInside offer={currentOffer}/>
          <OfferHost host={currentOffer.host} description={currentOffer.description}/>
          <OfferReviews />
        </div>
      </div>
    </>

  );
}

export default memo(OfferDetails);
