import {capitalizeFirstLetter} from '../../utils.ts';
import {DetailedOffer} from '../../types/offers/detailed-offer.ts';
import {memo} from 'react';

type OfferFeaturesProps = {
    type: DetailedOffer['type'];
    bedrooms: DetailedOffer['bedrooms'];
    maxAdults: DetailedOffer['maxAdults'];
};

function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default memo(OfferFeatures);
