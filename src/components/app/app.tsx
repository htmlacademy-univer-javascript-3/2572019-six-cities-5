import MainPage from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import {useAppSelector} from '../../hooks/redux.ts';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <>
      {(isOffersLoading || authStatus === AuthStatus.Unknown) && <LoadingSpinner/>}
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
    </>
  );
}

export default App;
