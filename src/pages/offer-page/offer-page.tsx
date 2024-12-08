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
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction} from '../../store/api-actions.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {redirectToRoute} from '../../store/actions.ts';
import {AppRoute} from '../../const.ts';


function OfferPage(): JSX.Element | null {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const nearbyOffers = useAppSelector((state) => state.nearPlaces);
  const currentOffer = useAppSelector((state) => state.offerDetailed);
  const requestStatus = useAppSelector((state) => state.requestStatus);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyPoints: Points = nearbyOffers
    .slice(0, 3)
    .map((offer) => ({id: offer.id, location: offer.location}));

  if (requestStatus === RequestStatus.Error) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearPlacesAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  if (!currentOffer || !id) {
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
              <OfferReviews
                reviewsCount={reviews.length}
                reviews={reviews
                  .toSorted((a, b) => (
                    new Date(b.date).getTime() - new Date(a.date).getTime()))
                  .slice(0, 10)}
              />

            </div>
          </div>
          <Map
            city={currentOffer.city}
            points={nearbyPoints.concat([{id: currentOffer.id, location: currentOffer.location}])}
            variant={'offer'}
            selectedPointId={currentOffer.id}
          />
        </section>

        <div className="container">
          <OfferCardList cityName={'Paris'} offers={nearbyOffers} variant={'nearby'}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
