import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import {OffersShort} from '../../types/offers/offer-short.ts';

type FavoritesPageProps = {
  allFavorites: OffersShort;
}

function FavoritesPage({ allFavorites } : FavoritesPageProps) : JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList allFavorites={allFavorites} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className='footer__logo-link' to={AppRoute.Main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
