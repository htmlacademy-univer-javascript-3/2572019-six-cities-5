import {BriefOffer} from './types/offers/brief-offer.ts';
import {City} from './types/city.ts';

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CityObject: Record<CityName, City> = {
  [CityName.Paris]: {
    name: CityName.Paris,
    location: {
      latitude: 48.84661,
      longitude: 2.351499,
      zoom: 12
    }
  },
  [CityName.Cologne]: {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  [CityName.Brussels]: {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  [CityName.Hamburg]: {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  [CityName.Dusseldorf]: {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
};

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

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameStore {
  Data = 'DATA',
  User = 'USER',
  DetailedData = 'DETAILED',
  RequestCondition = 'REQ_CONDITION',
  FavoriteData = 'FAVORITE',
}

export enum SortOption {
  popular = 'Popular',
  priceToHigh = 'Price: low to high',
  priceToLow = 'Price: high to low',
  topRated = 'Top rated first',
}

export const SortComparison : Record<SortOption, (a: BriefOffer, b: BriefOffer) => number> = {
  [SortOption.popular]: () => 0,
  [SortOption.priceToHigh]: (a: BriefOffer, b: BriefOffer) => a.price - b.price,
  [SortOption.priceToLow]: (a: BriefOffer, b: BriefOffer) => b.price - a.price,
  [SortOption.topRated]: (a: BriefOffer, b: BriefOffer) => b.rating - a.rating,
};

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

export const MIN_REVIEW_COMMENT_LENGTH = 50;

export const MAX_REVIEW_COMMENT_LENGTH = 300;

export const MAX_NEIGHBOURHOOD_POINTS_ON_MAP = 3;
