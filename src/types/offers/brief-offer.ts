import {City} from '../city.ts';
import {Location} from '../location.ts';

export type BriefOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type BriefOffers = BriefOffer[];
