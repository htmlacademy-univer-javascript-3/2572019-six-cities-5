import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page page--gray page--not-found'>
      <p>Error 404. Page not found</p>
      <Link to={AppRoute.Main}>
        <button className='page--not-found__to-main-button'>На главную</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
