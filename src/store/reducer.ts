import {AvailableCities} from '../const.ts';
import {mockOffersShort} from '../mocks/offers-short.ts';
import {OffersShort} from '../types/offers/offer-short.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity} from './actions.ts';
import {City} from '../types/city.ts';
import {mockCities} from '../mocks/cities.ts';

type AppState = {
  activeCity: City;
  offers: OffersShort;
}

const initialState : AppState = {
  activeCity: mockCities[AvailableCities.Paris],
  offers: mockOffersShort,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    });
});
