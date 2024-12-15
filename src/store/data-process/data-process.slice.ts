import {DataProcess} from '../../types/state.ts';
import {CityObject, SortOption, NameStore} from '../../constants.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction, toggleOfferFavoriteStatus} from '../api-actions.ts';
import {City} from '../../types/city.ts';
import {BriefOffer, BriefOffers} from '../../types/offers/brief-offer.ts';
import {Nullable} from '../../types/nullable.ts';

const initialState: DataProcess = {
  activeCity: CityObject.Paris,
  offers: [],
  hoverCardId: null,
  sortOption: SortOption.popular,
};

export const dataProcess = createSlice(
  {
    name: NameStore.Data,
    initialState,
    reducers: {
      setActiveCity: (state, action: PayloadAction<City>) => {
        state.activeCity = action.payload;
      },
      setHoverCardId: (state, action: PayloadAction<Nullable<BriefOffer['id']>>) => {
        state.hoverCardId = action.payload;
      },
      setSortOption: (state, action: PayloadAction<SortOption>) => {
        state.sortOption = action.payload;
      },
      setOffers: (state, action: PayloadAction<BriefOffers>) => {
        state.offers = action.payload;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchOffersAction.fulfilled, (state, action) => {
          state.offers = action.payload;
        })
        .addCase(toggleOfferFavoriteStatus.fulfilled, (state, action) => {
          const offerIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
          if (offerIndex > -1) {
            state.offers[offerIndex].isFavorite = action.payload.isFavorite;
          }
        });
    }
  }
);

export const {setActiveCity, setHoverCardId, setSortOption, setOffers} = dataProcess.actions;
