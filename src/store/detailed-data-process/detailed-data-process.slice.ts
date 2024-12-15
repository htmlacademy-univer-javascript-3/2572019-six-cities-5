import {DetailedDataProcess} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameStore} from '../../constants.ts';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction,
  postReviewAction, toggleOfferFavoriteStatus
} from '../api-actions.ts';

const initialState: DetailedDataProcess = {
  detailedOffer: null,
  nearbyOffers: [],
  reviews: [],
};

export const detailedDataProcess = createSlice(
  {
    name: NameStore.DetailedData,
    initialState,
    reducers: {
      dropAllDetailedData: (state) => {
        state.detailedOffer = null;
        state.reviews = [];
        state.nearbyOffers = [];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchOfferAction.fulfilled, (state, action) => {
          state.detailedOffer = action.payload;
        })
        .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
          state.nearbyOffers = action.payload;
        })
        .addCase(fetchReviewsAction.fulfilled, (state, action) => {
          state.reviews = action.payload;
        })
        .addCase(postReviewAction.fulfilled, (state, action) => {
          state.reviews = state.reviews.concat([action.payload]);
        })
        .addCase(toggleOfferFavoriteStatus.fulfilled, (state, action) => {
          const newOffer = action.payload;
          if (state.detailedOffer?.id === newOffer.id) {
            state.detailedOffer.isFavorite = newOffer.isFavorite;
          }

          const nearOffersIndex = state.nearbyOffers.findIndex((offer) => offer.id === newOffer.id);
          if (nearOffersIndex > -1) {
            state.nearbyOffers[nearOffersIndex].isFavorite = newOffer.isFavorite;
          }
        });
    }
  }
);

export const {dropAllDetailedData} = detailedDataProcess.actions;
