import {useAppSelector} from '../../hooks/redux.ts';
import CityTab from './city-tab.tsx';
import {mockCities} from '../../mocks/cities.ts';

function CitiesTabs(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(mockCities).map((city) =>
            <CityTab city={city} isActive={city.name === activeCity.name} key={city.name}/>)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
