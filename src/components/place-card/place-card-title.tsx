import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type PlaceCardTitleProps = {
  type: string;
  name: string;
  id: string;
}

function PlaceCardTitle({ type, name, id } : PlaceCardTitleProps) : JSX.Element {
  const capitalizeFirstLetter = (word: string) : string => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${id}`}>{name}</Link>
      </h2>
      <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
    </>
  );
}

export default PlaceCardTitle;
