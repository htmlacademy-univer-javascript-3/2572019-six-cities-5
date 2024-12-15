import {Location} from './location.ts';
import {CityName} from '../constants.ts';

export type City = {
  name: CityName;
  location: Location;
}
