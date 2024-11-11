import Header from '../../components/header/header.tsx';
import CitiesTabs from '../../components/cities-tabs/cities-tabs.tsx';
import MainOffersList from '../../components/main-offers-list/main-offers-list.tsx';
import {OffersShort} from '../../types/offers/offer-short.ts';
import {mockCities} from '../../mocks/cities.ts';
import Map from '../../components/map/map.tsx';
import {AvailableCities} from '../../const.ts';

export type MainPageProps = {
  rentOffersCount: number;
  offersShort: OffersShort;
}

function MainPage({rentOffersCount, offersShort} : MainPageProps): JSX.Element {
  const points = offersShort.map(({location}) => location);
  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentOffersCount} places to stay in Paris</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <MainOffersList offers={offersShort} />
            </section>
            <div className="cities__right-section">
              <Map city={mockCities[AvailableCities.Paris]} points={points}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
