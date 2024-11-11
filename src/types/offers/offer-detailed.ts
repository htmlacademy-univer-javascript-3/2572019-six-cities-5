import {User} from '../user.ts';
import {OfferShort} from './offer-short.ts';

export type OfferDetailed = Omit<OfferShort, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type OffersDetailed = Map<string, OfferDetailed>;
