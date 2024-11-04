import {OfferShort} from './offer-short.ts';
import {OfferDetailed} from './offer-detailed.ts';

export type Offer = {
  shortInfo: OfferShort;
  detailedInfo: OfferDetailed;
};

export type Offers = Offer[];
