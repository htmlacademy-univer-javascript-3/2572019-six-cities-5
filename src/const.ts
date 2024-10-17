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
    Offer = '/offer/:id'
  }

export enum AuthStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const Settings = {
  rentOffersCount: 312,
  availableCities: Object.values(AvailableCities),
};
