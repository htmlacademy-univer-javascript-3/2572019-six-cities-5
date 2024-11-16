import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {PropsWithChildren} from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
