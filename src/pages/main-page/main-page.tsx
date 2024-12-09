import Header from '../../components/header/header.tsx';
import CitiesTabs from '../../components/cities-tabs/cities-tabs.tsx';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import {useMainPage} from '../../hooks/pages/use-main-page.ts';
import MainMapContainer from '../../components/main-map-container/main-map-container.tsx';

function MainPage(): JSX.Element {
  const {activeCity, offersByCity, points} = useMainPage();

  return (
    <div className="page page--gray page--main">
      <Header logoActive/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList cityName={activeCity.name} offers={offersByCity} offersCount={offersByCity.length} variant={'main'} />
            <MainMapContainer points={points} activeCity={activeCity}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
