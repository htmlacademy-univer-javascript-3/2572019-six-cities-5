import {Navigate} from 'react-router-dom';
import {AppRoute} from '../constants.ts';
import {PropsWithChildren, ReactNode} from 'react';
import {useAuthorization} from '../hooks/services/use-authorization.ts';

function PrivateRoute({children}: PropsWithChildren): ReactNode {
  const isAuthorized = useAuthorization();

  return isAuthorized
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
