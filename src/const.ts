import {SortingOrder} from './types/sorting-order.ts';
import {OfferShort} from './types/offers/offer-short.ts';

export enum AvailableCities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favorites',
  Offer = '/offer',
  NotFound = '/not-found',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Settings = {
  rentOffersCount: 312,
  cityNames: Object.values(AvailableCities),
};

export const SortComparers = {
  [SortingOrder.priceToHigh]: (a: OfferShort, b: OfferShort) => a.price - b.price,
  [SortingOrder.priceToLow]: (a: OfferShort, b: OfferShort) => b.price - a.price,
  [SortingOrder.topRated]: (a: OfferShort, b: OfferShort) => b.rating - a.rating,
};

export const URL_MARKER_DEFAULT = './public/img/pin.svg';
export const URL_MARKER_CURRENT = './public/img/pin-active.svg';
