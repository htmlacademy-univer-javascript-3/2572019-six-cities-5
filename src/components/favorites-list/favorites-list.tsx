import {OffersShort} from '../../types/offers/offer-short.ts';
import {CityName} from '../../const.ts';
import FavoritesListElement from './favorites-list-element.tsx';
import {Fragment} from 'react';

type FavoritesListProps = {
  allFavorites: OffersShort;
}

function FavoritesList({ allFavorites } : FavoritesListProps) : JSX.Element {
  const allAvailableCities = Object.values(CityName);
  const cityFilteredFavorites =
    allAvailableCities
      .map((city) => (
        {[city]: allFavorites.filter((card) => card.city.name === city)}
      ))
      .reduce((accumulator, value) => ({...accumulator, ...value}), {});


  return (
    <ul className="favorites__list">
      {Object.keys(cityFilteredFavorites).map((city) => (
        <Fragment key={city}>
          {cityFilteredFavorites[city].length === 0 ? null :
            <FavoritesListElement favoritesAtCity={cityFilteredFavorites[city]} cityName={city}/>}
        </Fragment>
      ))}
    </ul>
  );
}

export default FavoritesList;
