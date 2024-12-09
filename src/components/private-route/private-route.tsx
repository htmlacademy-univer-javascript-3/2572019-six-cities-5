import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {PropsWithChildren, ReactNode} from 'react';
import {useAppSelector} from '../../hooks/services/redux.ts';
import {getAuthStatus} from '../../store/user-process/user-process.selectors.ts';

function PrivateRoute({children}: PropsWithChildren): ReactNode {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return authorizationStatus === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
