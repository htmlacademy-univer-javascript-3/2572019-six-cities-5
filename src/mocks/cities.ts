import {AvailableCities} from '../const.ts';
import {City} from '../types/city.ts';

type MockCities = {
  [AvailableCities.Paris]: City;
  [AvailableCities.Amsterdam]: City;
  [AvailableCities.Cologne]: City;
  [AvailableCities.Brussels]: City;
  [AvailableCities.Hamburg]: City;
  [AvailableCities.Dusseldorf]: City;
}
export const mockCities: MockCities = {
  [AvailableCities.Paris]: {
    name: AvailableCities.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  [AvailableCities.Cologne]: {
    name: AvailableCities.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  [AvailableCities.Brussels]: {
    name: AvailableCities.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  [AvailableCities.Amsterdam]: {
    name: AvailableCities.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  [AvailableCities.Hamburg]: {
    name: AvailableCities.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  [AvailableCities.Dusseldorf]: {
    name: AvailableCities.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
};
