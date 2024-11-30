import {CityObject, CityName} from './const.ts';
import {City} from './types/city.ts';

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

export const getCityObjectByName = (cityName: string) : City | undefined => {
  switch (cityName) {
    case CityName.Paris:
      return CityObject.Paris;
    case CityName.Cologne:
      return CityObject.Cologne;
    case CityName.Hamburg:
      return CityObject.Hamburg;
    case CityName.Brussels:
      return CityObject.Brussels;
    case CityName.Dusseldorf:
      return CityObject.Dusseldorf;
    case CityName.Amsterdam:
      return CityObject.Amsterdam;
  }
};
