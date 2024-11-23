import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Nullable} from '../types/nullable.ts';
import {SortingOrder} from '../types/sorting-order.ts';
import {OffersShort} from '../types/offers/offer-short.ts';

export const setActiveCity = createAction<City>('setCity');
export const setHoverCardId = createAction<Nullable<string>>('setHooverCardId');

export const setSortingOrder = createAction<SortingOrder>('setSortingOrder');

export const setOffers = createAction<OffersShort>('setOffers');
