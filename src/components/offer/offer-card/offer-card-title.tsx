import {Link} from 'react-router-dom';
import {AppRoute} from '../../../constants.ts';
import {capitalizeFirstLetter} from '../../../utils.ts';

type OfferCardTitleProps = {
  type: string;
  name: string;
  id: string;
}

function OfferCardTitle({ type, name, id } : OfferCardTitleProps) : JSX.Element {
  return (
    <>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${id}`}>{name}</Link>
      </h2>
      <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
    </>
  );
}

export default OfferCardTitle;
