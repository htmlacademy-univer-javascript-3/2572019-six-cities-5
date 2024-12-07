import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {useAuthorization} from '../../hooks/use-authorization.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {logoutAction} from '../../store/api-actions.ts';

function HeaderNavigation(): JSX.Element {
  const isAuthorized = useAuthorization();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData);

  const handleLinkClick = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {!isAuthorized &&
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>}
        {isAuthorized &&
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{userData?.email}</span>
                <span className="header__favorite-count">{3}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={''} onClick={handleLinkClick}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
