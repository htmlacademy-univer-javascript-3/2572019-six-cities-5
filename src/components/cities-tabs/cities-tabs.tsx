import {Link} from 'react-router-dom';
import { AppRoute, Settings } from '../../const';

const linkBaseCn = 'locations__item-link tabs__item';
function CitiesTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Settings.availableCities.map((city, index) =>
            (
              <li className="locations__item" key={city}>
                <Link
                  to={AppRoute.Main}
                  className={`${linkBaseCn} ${index === 0 ? 'tabs__item--active' : ''}`}
                >
                  <span>{city}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
