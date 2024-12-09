import {DetailedDataProcess} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../../const.ts';
import {
  fetchNearPlacesAction,
  fetchOfferAction,
  fetchReviewsAction,
  postReviewAction
} from '../api-actions.ts';

const initialState: DetailedDataProcess = {
  offerDetailed: null,
  nearPlaces: [],
  reviews: [],
};

export const detailedDataProcess = createSlice(
  {
    name: StoreNameSpace.DetailedData,
    initialState,
    reducers: {
      dropAllDetailedData: (state) => {
        state.offerDetailed = null;
        state.reviews = [];
        state.nearPlaces = [];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchOfferAction.fulfilled, (state, action) => {
          state.offerDetailed = action.payload;
        })
        .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
          state.nearPlaces = action.payload;
        })
        .addCase(fetchReviewsAction.fulfilled, (state, action) => {
          state.reviews = action.payload;
        })
        .addCase(postReviewAction.fulfilled, (state, action) => {
          state.reviews = state.reviews.concat([action.payload]);
        });
    }
  }
);

export const {dropAllDetailedData} = detailedDataProcess.actions;
