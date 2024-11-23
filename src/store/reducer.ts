import {AvailableCities} from '../const.ts';
import {mockOffersShort} from '../mocks/offers-short.ts';
import {OffersShort} from '../types/offers/offer-short.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setHoverCardId, setOffers, setSortingOrder} from './actions.ts';
import {City} from '../types/city.ts';
import {mockCities} from '../mocks/cities.ts';
import {Nullable} from '../types/nullable.ts';
import {SortingOrder} from '../types/sorting-order.ts';

type AppState = {
  activeCity: City;
  offers: OffersShort;
  hoverCardId: Nullable<string>;
  sortingOrder: SortingOrder;
}

const initialState : AppState = {
  activeCity: mockCities[AvailableCities.Paris],
  offers: mockOffersShort,
  hoverCardId: null,
  sortingOrder: SortingOrder.popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setHoverCardId, (state, action) => {
      state.hoverCardId = action.payload;
    })
    .addCase(setSortingOrder, (state, action) => {
      state.sortingOrder = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
