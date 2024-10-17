import {Link} from 'react-router-dom';
import { AppRoute, Settings } from '../../const';


function CitiesTabs(): JSX.Element {
  const linkBaseClassName = 'locations__item-link tabs__item'; // tabs__item--active
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Settings.availableCities.map((city, index) =>
            (
              <li className="locations__item" key={city}>
                <Link
                  to={AppRoute.Main}
                  className={index === 3 ? linkBaseClassName.concat(' tabs__item--active') : linkBaseClassName}
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
