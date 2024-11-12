import {capitalizeFirstLetter} from '../../utils.ts';
import {OfferDetailed} from '../../types/offers/offer-detailed.ts';

type OfferFeaturesProps = {
  offer: OfferDetailed;
};

function OfferFeatures({offer}: OfferFeaturesProps) {
  const {type, bedrooms, maxAdults} = offer;
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

export default OfferFeatures;
