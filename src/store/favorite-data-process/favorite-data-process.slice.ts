import {FavoriteDataProcess} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameStore} from '../../constants.ts';
import {fetchFavoritesAction, toggleOfferFavoriteStatus} from '../api-actions.ts';
import {BriefOffer} from '../../types/offers/brief-offer.ts';

const initialState: FavoriteDataProcess = {
  favoriteOffers: [],
};

export const favoriteDataProcess = createSlice({
  name: NameStore.FavoriteData,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(toggleOfferFavoriteStatus.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push((<BriefOffer>action.payload));
        } else {
          const offerIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
          state.favoriteOffers.splice(offerIndex, 1);
        }
      });
  }
});
