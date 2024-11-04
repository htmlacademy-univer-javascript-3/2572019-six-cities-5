import {Host} from './host.ts';
import {OfferShort} from './offer-short.ts';

export type OfferDetailed = Omit<OfferShort, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type OffersDetailed = Map<string, OfferDetailed>;
