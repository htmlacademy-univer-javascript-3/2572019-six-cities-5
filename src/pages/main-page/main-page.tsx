import Header from '../../components/header/header.tsx';
import CitiesTabs from '../../components/cities-tabs/cities-tabs.tsx';
import {OffersShort} from '../../types/offers/offer-short.ts';
import {mockCities} from '../../mocks/cities.ts';
import Map from '../../components/map/map.tsx';
import {AvailableCities} from '../../const.ts';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import {City} from '../../types/city.ts';

export type MainPageProps = {
  rentOffersCount: number;
  offers: OffersShort;
  city: City;
}

function MainPage({rentOffersCount, offers, city} : MainPageProps): JSX.Element {
  const points = offers.map(({location}) => location);
  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList cityName={city.name} offers={offers} offersCount={rentOffersCount} variant={'main'} />
            <div className="cities__right-section">
              <Map city={mockCities[AvailableCities.Paris]} points={points} variant={'main'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
