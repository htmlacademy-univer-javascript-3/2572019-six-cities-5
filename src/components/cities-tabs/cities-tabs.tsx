import {useAppSelector} from '../../hooks/redux.ts';
import CityTab from './city-tab.tsx';
import {CityObject} from '../../const.ts';
import {City} from '../../types/city.ts';

function CitiesTabs(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityObject).map((city : City) =>
            <CityTab city={city} isActive={city.name === activeCity.name} key={city.location.latitude}/>)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
