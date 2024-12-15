import {BriefOffers} from '../../types/offers/brief-offer.ts';
import FavoritesListElement from './favorites-list-element.tsx';
import {Fragment} from 'react';
import {filterAndCategorizeFavorites} from '../../utils.ts';

type FavoritesListProps = {
  allFavorites: BriefOffers;
}

function FavoritesList({ allFavorites } : FavoritesListProps) : JSX.Element {
  const cityFilteredFavorites = filterAndCategorizeFavorites(allFavorites);


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
