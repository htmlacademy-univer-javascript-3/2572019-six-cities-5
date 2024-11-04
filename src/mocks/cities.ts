import {AvailableCities} from '../const.ts';
import {City} from '../types/city.ts';

type MockCities = {
  [AvailableCities.Paris]: City;
  [AvailableCities.Amsterdam]: City;
  [AvailableCities.Cologne]: City;
}
export const mockCities: MockCities = {
  [AvailableCities.Paris]: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  [AvailableCities.Amsterdam]: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  [AvailableCities.Cologne]: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
};
