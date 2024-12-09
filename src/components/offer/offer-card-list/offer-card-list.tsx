import {OffersShort} from '../../../types/offers/offer-short.ts';
import {OfferCardListVariants} from '../../../types/variants.ts';
import DropdownFilter from '../../dropdown-offers-filter/dropdown-filter.tsx';
import OfferCardsContainer from './offer-cards-container.tsx';
import {useOfferCardList} from '../../../hooks/components/use-offer-card-list.ts';
import {Nullable} from '../../../types/nullable.ts';
import {useAppDispatch} from '../../../hooks/services/redux.ts';
import {useCallback} from 'react';
import {setHoverCardId} from '../../../store/data-process/data-process.slice.ts';

type OfferCardListProps = {
  cityName?: string;
  offers: OffersShort;
  offersCount?: number;
  variant: OfferCardListVariants;
}

function OfferCardList({cityName, offers, variant, offersCount}: OfferCardListProps) {
  const dispatch = useAppDispatch();
  const handleHoverCard = useCallback((id: Nullable<string>) => dispatch(setHoverCardId(id)), []);

  const {
    sectionClassName,
    headerClassName,
    headerContent,
    isHeaderActive,
    isFoundActive,
    isFormActive,
    containerClassName,
  } = useOfferCardList({variant});

  return (
    <section className={sectionClassName}>
      {isHeaderActive && <h2 className={headerClassName}>{headerContent}</h2>}
      {isFoundActive && <b className="places__found">{offersCount} places to stay in {cityName}</b>}
      {isFormActive && <DropdownFilter />}
      <OfferCardsContainer offers={offers} className={containerClassName} onCardHover={handleHoverCard}/>
    </section>
  );
}

export default OfferCardList;
