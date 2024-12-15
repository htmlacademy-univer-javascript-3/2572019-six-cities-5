import {AppState} from '../../types/state.ts';
import {NameStore} from '../../constants.ts';
import {DetailedOffer} from '../../types/offers/detailed-offer.ts';
import {Nullable} from '../../types/nullable.ts';
import {Reviews} from '../../types/review.ts';
import {BriefOffers} from '../../types/offers/brief-offer.ts';

export const getDetailedOffer = (state: AppState): Nullable<DetailedOffer> => state[NameStore.DetailedData].detailedOffer;
export const getReviews = (state: AppState): Reviews => state[NameStore.DetailedData].reviews;
export const getNearByOffers = (state: AppState): BriefOffers => state[NameStore.DetailedData].nearbyOffers;
