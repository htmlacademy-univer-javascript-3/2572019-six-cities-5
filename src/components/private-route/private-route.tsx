import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {PropsWithChildren, ReactNode} from 'react';
import {useAppSelector} from '../../hooks/redux.ts';

function PrivateRoute({children}: PropsWithChildren): ReactNode {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
