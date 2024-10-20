import CitiesCard from '../../components/cities-card/cities-card.tsx';
import Header from '../../components/header/header.tsx';
import CitiesTabs from '../../components/cities-tabs/cities-tabs.tsx';

export type MainPageProps = {
  rentOffersCount: number;
}

function MainPage({rentOffersCount} : MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentOffersCount} places to stay in Amsterdam</b>
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
              <div className="cities__places-list places__list tabs__content">
                <CitiesCard title={'Beautiful & luxurious apartment at great location'}
                  rentPrice={120}
                  rating={4}
                  placeType={'Apartment'}
                  imageSrc={'img/apartment-01.jpg'}
                />
                <CitiesCard title={'Wood and stone place'}
                  rentPrice={80}
                  rating={4}
                  placeType={'Room'}
                  imageSrc={'/img/room.jpg'}
                />
                <CitiesCard title={'Canal View Prinsengracht'}
                  rentPrice={132}
                  rating={4}
                  placeType={'Apartment'}
                  imageSrc={'/img/apartment-02.jpg'}
                />
                <CitiesCard title={'Nice, cozy, warm big bed apartment'}
                  rentPrice={180}
                  rating={5}
                  placeType={'Apartment'}
                  imageSrc={'/img/apartment-03.jpg'}
                />
                <CitiesCard title={'Wood and stone place'}
                  rentPrice={80}
                  rating={4}
                  placeType={'Room'}
                  imageSrc={'/img/room.jpg'}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
