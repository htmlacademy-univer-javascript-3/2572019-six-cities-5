import {store} from '../store';
import {AuthStatus, SortOption} from '../constants.ts';
import {Nullable} from './nullable.ts';
import {UserData} from './user-data.ts';
import {BriefOffers} from './offers/brief-offer.ts';
import {City} from './city.ts';
import {RequestStatus} from './request-status.ts';
import {DetailedOffer} from './offers/detailed-offer.ts';
import {Reviews} from './review.ts';

export type UserProcess = {
  authorizationStatus: AuthStatus;
  userData: Nullable<UserData>;
};

export type DataProcess = {
  activeCity: City;
  offers: BriefOffers;
  hoverCardId: Nullable<string>;
  sortOption: SortOption;
}

export type DetailedDataProcess = {
  detailedOffer: Nullable<DetailedOffer>;
  nearbyOffers: BriefOffers;
  reviews: Reviews;
}

export type RequestProcess = {
  requestStatus: RequestStatus;
}

export type FavoriteDataProcess = {
  favoriteOffers: BriefOffers;
}

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
