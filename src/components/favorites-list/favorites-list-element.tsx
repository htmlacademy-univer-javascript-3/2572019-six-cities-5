import {OffersShort} from '../../types/offers/offer-short.ts';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card.tsx';

type FavoritesListElementProps = {
  favoritesAtCity: OffersShort;
  cityName: string;
}

function FavoritesListElement({favoritesAtCity, cityName}: FavoritesListElementProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesAtCity.map((offer) => (
          <FavoritePlaceCard key={offer.id} placeShortInfo={offer}/>
        ))}
      </div>
    </li>
  );
}

export default FavoritesListElement;
