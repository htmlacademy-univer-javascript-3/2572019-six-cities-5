import Header from '../../components/header/header.tsx';
import {AppRoute, CityObject} from '../../const.ts';
import {Link, useNavigate} from 'react-router-dom';
import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../hooks/redux.ts';
import {loginAction} from '../../store/api-actions.ts';
import {setActiveCity} from '../../store/actions.ts';
import {useAuthorization} from '../../hooks/use-authorization.ts';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAuthorization();

  const cityButtonName = Object.values(CityObject)[Math.floor(Math.random() * 6)];

  if (isAuthorized) {
    navigate(AppRoute.Main);
  }

  const handleLinkOnClick = () => {
    dispatch(setActiveCity(cityButtonName));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };


  return (
    <div className="page page--gray page--login">
      <Header disableNav/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={handleLinkOnClick}
              >
                <span>{cityButtonName.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
