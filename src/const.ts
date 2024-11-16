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

export const URL_MARKER_DEFAULT = './public/img/pin.svg';
export const URL_MARKER_CURRENT = './public/img/pin-active.svg';
