import {AvailableCities} from './const.ts';
import {mockCities} from './mocks/cities.ts';

export function capitalizeFirstLetter(word: string) : string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric'}).format(
    new Date(date)
  );

export const shuffleArray = <T>(unshuffled: T[]) => unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .slice(0, 3);

export const getCityObjectByName = (cityName: string) => {
  switch (cityName) {
    case AvailableCities.Paris:
      return mockCities[AvailableCities.Paris];
    case AvailableCities.Cologne:
      return mockCities[AvailableCities.Cologne];
    case AvailableCities.Hamburg:
      return mockCities[AvailableCities.Hamburg];
    case AvailableCities.Brussels:
      return mockCities[AvailableCities.Brussels];
    case AvailableCities.Dusseldorf:
      return mockCities[AvailableCities.Dusseldorf];
    case AvailableCities.Amsterdam:
      return mockCities[AvailableCities.Amsterdam];
    default:
      return null;
  }
};
