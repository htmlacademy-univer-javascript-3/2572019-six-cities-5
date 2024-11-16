import MainPage from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import {OffersShort} from '../../types/offers/offer-short.ts';
import {OffersDetailed} from '../../types/offers/offer-detailed.ts';

type AppProps = {
  offersDetailed: OffersDetailed;
  allFavorites: OffersShort;
}

function App({offersDetailed, allFavorites}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={AuthStatus.Auth}>
              <FavoritesPage allFavorites={allFavorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}>
          <Route index element={<NotFoundPage/>}/>
          <Route path={':id'}
            element={<OfferPage offersDetailed={offersDetailed}/>}
          />
        </Route>
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
