import {AuthStatus, CityObject} from '../const.ts';
import {OffersShort} from '../types/offers/offer-short.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  setActiveCity,
  setAuthStatus,
  setHoverCardId,
  setOffers,
  setOffersLoading,
  setSortingOrder, setUserData
} from './actions.ts';
import {City} from '../types/city.ts';
import {Nullable} from '../types/nullable.ts';
import {SortingOrder} from '../types/sorting-order.ts';
import {fetchOffersAction} from './api-actions.ts';
import {UserData} from '../types/user-data.ts';

type AppState = {
  activeCity: City;
  offers: OffersShort;
  hoverCardId: Nullable<string>;
  sortingOrder: SortingOrder;
  isOffersLoading: boolean;
  authorizationStatus: AuthStatus;
  userData: Nullable<UserData>;
}

const initialState : AppState = {
  activeCity: CityObject.Paris,
  offers: [],
  hoverCardId: null,
  sortingOrder: SortingOrder.popular,
  isOffersLoading: false,
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
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
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
