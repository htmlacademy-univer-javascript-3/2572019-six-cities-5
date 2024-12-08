import {AuthStatus, CityObject} from '../const.ts';
import {OffersShort} from '../types/offers/offer-short.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  dropAllDetailedData,
  dropRequestStatus,
  setActiveCity,
  setAuthStatus,
  setHoverCardId,
  setOffers,
  setSortingOrder,
  setUserData
} from './actions.ts';
import {City} from '../types/city.ts';
import {Nullable} from '../types/nullable.ts';
import {SortingOrder} from '../types/sorting-order.ts';
import {
  checkAuthStatusAction,
  fetchNearPlacesAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  postReviewAction,
} from './api-actions.ts';
import {UserData} from '../types/user-data.ts';
import {OfferDetailed} from '../types/offers/offer-detailed.ts';
import {RequestStatus} from '../types/request-status.ts';
import {Reviews} from '../types/review.ts';

type AppState = {
  activeCity: City;
  offers: OffersShort;
  hoverCardId: Nullable<string>;
  sortingOrder: SortingOrder;
  authorizationStatus: AuthStatus;
  userData: Nullable<UserData>;
  offerDetailed: Nullable<OfferDetailed>;
  nearPlaces: OffersShort;
  requestStatus: RequestStatus;
  reviews: Reviews;
}

const initialState : AppState = {
  activeCity: CityObject.Paris,
  offers: [],
  hoverCardId: null,
  sortingOrder: SortingOrder.popular,
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
  offerDetailed: null,
  nearPlaces: [],
  requestStatus: RequestStatus.Idle,
  reviews: [],
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
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(dropAllDetailedData, (state) => {
      state.offerDetailed = null;
      state.reviews = [];
      state.nearPlaces = [];
    })
    .addCase(dropRequestStatus, (state) => {
      state.requestStatus = RequestStatus.Idle;
    })


    .addCase(checkAuthStatusAction.fulfilled, (state, action) => {
      state.requestStatus = RequestStatus.Success;
      state.userData = action.payload;
    })
    .addCase(checkAuthStatusAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
      state.authorizationStatus = AuthStatus.Unknown;
    })
    .addCase(checkAuthStatusAction.rejected, (state) => {
      state.requestStatus = RequestStatus.Error;
      state.userData = null;
    })


    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.requestStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.requestStatus = RequestStatus.Error;
    })


    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.requestStatus = RequestStatus.Success;
      state.offerDetailed = action.payload;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.requestStatus = RequestStatus.Error;
    })


    .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchNearPlacesAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
    })
    .addCase(fetchNearPlacesAction.rejected, (state) => {
      state.requestStatus = RequestStatus.Error;
    })


    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.requestStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.requestStatus = RequestStatus.Error;
    })


    .addCase(postReviewAction.pending, (state) => {
      state.requestStatus = RequestStatus.Process;
    })
    .addCase(postReviewAction.fulfilled, (state, action) => {
      state.reviews = state.reviews.concat([action.payload]);
      state.requestStatus = RequestStatus.Success;
    });
});
