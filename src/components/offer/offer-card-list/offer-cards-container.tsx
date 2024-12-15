import OfferCard from '../offer-card/offer-card.tsx';
import {BriefOffers} from '../../../types/offers/brief-offer.ts';
import {Nullable} from '../../../types/nullable.ts';

type OfferCardsContainerProps = {
  offers: BriefOffers;
  className?: string;
  onCardHover?: (id: Nullable<string>) => void;
}

function OfferCardsContainer({offers, className, onCardHover}: OfferCardsContainerProps) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offerInfo={offer} variant={'main'} onCardHover={onCardHover}/>
      ))}
    </div>
  );
}

export default OfferCardsContainer;
