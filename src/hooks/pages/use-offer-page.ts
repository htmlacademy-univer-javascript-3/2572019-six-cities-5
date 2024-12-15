import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {Points} from '../../types/point.ts';
import {AppRoute, MAX_NEIGHBOURHOOD_POINTS_ON_MAP} from '../../constants.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {redirectToRoute} from '../../store/action.ts';
import {useEffect} from 'react';
import {fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction} from '../../store/api-actions.ts';
import {useParams} from 'react-router-dom';
import {getNearByOffers as getNearbyOffers, getDetailedOffer} from '../../store/detailed-data-process/detailed-data-process.selectors.ts';
import {getRequestStatus} from '../../store/request-condition-process/request-condition-process.selectors.ts';

export function useOfferPage() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const nearbyOffers = useAppSelector(getNearbyOffers);
  const currentOffer = useAppSelector(getDetailedOffer);
  const requestStatus = useAppSelector(getRequestStatus);

  const nearbyPoints: Points = nearbyOffers
    .slice(0, MAX_NEIGHBOURHOOD_POINTS_ON_MAP)
    .map((offer) => ({id: offer.id, location: offer.location}));

  if (requestStatus === RequestStatus.Error) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  return {currentOffer, nearbyPoints, nearbyOffers: nearbyOffers.length >= 3 ? nearbyOffers.slice(0, 3) : nearbyOffers};
}
