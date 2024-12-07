import Header from '../../components/header/header.tsx';
import {useParams} from 'react-router-dom';
import PremiumSign from '../../components/premium-sign/premium-sign.tsx';
import Rating from '../../components/rating/rating.tsx';
import BookmarkButton from '../../components/bookmark-button/bookmark-button.tsx';
import OfferGallery from '../../components/offer/offer-gallery.tsx';
import OfferHost from '../../components/offer/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews.tsx';
import OfferPrice from '../../components/offer/offer-price.tsx';
import Map from '../../components/map/map.tsx';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import OfferFeatures from '../../components/offer/offer-features.tsx';
import OfferInside from '../../components/offer/offer-inside.tsx';
import {Points} from '../../types/point.ts';
import {OffersShort} from '../../types/offers/offer-short.ts';
import {OfferDetailed} from '../../types/offers/offer-detailed.ts';
import {CityName} from '../../const.ts';

function OfferPage(): JSX.Element | null {
  const {id} = useParams();
  const nearbyOffers: OffersShort = [];
  const nearbyPoints: Points = nearbyOffers.map((offer) => ({id: offer.id, location: offer.location}));

  if (!id) {
    return null;
  }

  const currentOffer: OfferDetailed = {
    id: 'string',
    title: 'string',
    type: 'string',
    price: 0,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    description: 'string',
    bedrooms: 1,
    goods: [''],
    host: {
      name: 'string',
      avatarUrl: 'string',
      isPro: false,
      email: 'string',
      token: 'string'
    },
    images: [''],
    maxAdults: 1,
  };

  if (!currentOffer) {
    return null;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={currentOffer.images}/>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumSign show={currentOffer.isPremium} variant={'full'}/>

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <BookmarkButton variant={'full'}/>
              </div>

              <Rating value={currentOffer.rating} variant={'full'}>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </Rating>
              <OfferFeatures offer={currentOffer}/>
              <OfferPrice price={currentOffer.price} variant={'full'}/>
              <OfferInside offer={currentOffer}/>
              <OfferHost host={currentOffer.host} description={currentOffer.description}/>
              <OfferReviews reviews={[]}/>

            </div>
          </div>
          <Map city={currentOffer.city} points={nearbyPoints} variant={'offer'} selectedPointId={null}/>
        </section>

        <div className="container">
          <OfferCardList cityName={'Paris'} offers={nearbyOffers} variant={'nearby'}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
