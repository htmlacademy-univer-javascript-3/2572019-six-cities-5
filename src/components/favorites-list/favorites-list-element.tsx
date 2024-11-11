import {OffersShort} from '../../types/offers/offer-short.ts';
import OfferCard from '../offer/offer-card/offer-card.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type FavoritesListElementProps = {
  favoritesAtCity: OffersShort;
  cityName: string;
}

function FavoritesListElement({favoritesAtCity, cityName}: FavoritesListElementProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesAtCity.map((offer) => (
          <OfferCard key={offer.id} placeShortInfo={offer} variant={'favorites'}/>
        ))}
      </div>
    </li>
  );
}

export default FavoritesListElement;
