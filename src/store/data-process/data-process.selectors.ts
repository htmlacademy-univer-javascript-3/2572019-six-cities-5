import {AppState} from '../../types/state.ts';
import {SortOption, NameStore} from '../../constants.ts';
import {City} from '../../types/city.ts';
import {BriefOffer, BriefOffers} from '../../types/offers/brief-offer.ts';
import {Nullable} from '../../types/nullable.ts';

export const getActiveCity = (state: AppState): City => state[NameStore.Data].activeCity;
export const getOffers = (state: AppState): BriefOffers => state[NameStore.Data].offers;
export const getHoverCardId = (state: AppState): Nullable<BriefOffer['id']> => state[NameStore.Data].hoverCardId;
export const getSortOption = (state: AppState): SortOption => state[NameStore.Data].sortOption;
