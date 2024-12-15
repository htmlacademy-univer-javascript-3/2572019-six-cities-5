import {UserData} from '../user-data.ts';
import {BriefOffer} from './brief-offer.ts';

export type DetailedOffer = Omit<BriefOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserData;
  images: string[];
  maxAdults: number;
}

export type DetailedOffers = Map<string, DetailedOffer>;
