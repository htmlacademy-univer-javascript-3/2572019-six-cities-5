import {OffersShort} from '../../types/offers/offer-short.ts';
import PlaceCard from '../place-card/place-card.tsx';

type OffersListProps = {
  offers: OffersShort;
}

function MainOffersList({ offers } : OffersListProps) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} placesShortInfo={offer}/>
      ))}
    </div>
  );
}

export default MainOffersList;
