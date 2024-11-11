import Header from '../../components/header/header.tsx';
import {OffersDetailed} from '../../types/offers/offer-detailed.ts';
import {useParams} from 'react-router-dom';
import PremiumSign from '../../components/premium-sign/premium-sign.tsx';
import {capitalizeFirstLetter} from '../../utils.ts';
import Rating from '../../components/rating/rating.tsx';
import BookmarkButton from '../../components/bookmark-button/bookmark-button.tsx';
import OfferGallery from '../../components/offer/offer-gallery.tsx';
import OfferHost from '../../components/offer/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews.tsx';

type OfferPageProps = {
  offersDetailed: OffersDetailed;
}

function OfferPage({ offersDetailed } : OfferPageProps): JSX.Element | null {
  const {id} = useParams();

  if (!id) {
    return null;
  }

  const currentOffer = offersDetailed.get(id);

  if (!currentOffer) {
    return null;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={currentOffer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumSign show={currentOffer.isPremium} variant={'full'} />

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <BookmarkButton variant={'full'}/>
              </div>

              <Rating value={currentOffer.rating} variant={'full'}>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </Rating>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <OfferHost host={currentOffer.host} description={currentOffer.description}/>
              <OfferReviews />

            </div>
          </div>
          <section className="offer__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/room.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '100%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
