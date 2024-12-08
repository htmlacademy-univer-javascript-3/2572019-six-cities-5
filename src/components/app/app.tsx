import MainPage from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <LoadingSpinner />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}>
          <Route index element={<NotFoundPage/>}/>
          <Route path={':id'}
            element={<OfferPage />}
          />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
