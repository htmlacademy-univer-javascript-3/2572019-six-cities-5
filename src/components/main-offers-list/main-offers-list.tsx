import {OffersShort} from '../../types/offers/offer-short.ts';
import OfferCard from '../offer/offer-card/offer-card.tsx';

type OffersListProps = {
  offers: OffersShort;
}

function MainOffersList({ offers } : OffersListProps) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} placeShortInfo={offer} variant={'main'}/>
      ))}
    </div>
  );
}

export default MainOffersList;
