import Header from '../../components/header/header.tsx';
import CitiesTabs from '../../components/cities-tabs/cities-tabs.tsx';
import Map from '../../components/map/map.tsx';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import {useAppSelector} from '../../hooks/redux.ts';
import {Points} from '../../types/point.ts';

function MainPage(): JSX.Element {
  const hoverCardId = useAppSelector((store) => store.hoverCardId);
  const activeCity = useAppSelector((store) => store.activeCity);
  const offersRaw = useAppSelector((store) => store.offers);
  const offersByCity = offersRaw.filter((offer) => offer.city.name === activeCity.name);
  const points : Points = offersByCity.map(({location, id}) => ({id, location}));

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList cityName={activeCity.name} offers={offersByCity} offersCount={offersByCity.length} variant={'main'} />
            <div className="cities__right-section">
              <Map city={activeCity} points={points} variant={'main'} selectedPointId={hoverCardId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
