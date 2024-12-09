import {DataProcess} from '../../types/state.ts';
import {CityObject, StoreNameSpace} from '../../const.ts';
import {SortingOrder} from '../../types/sorting-order.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from '../api-actions.ts';
import {City} from '../../types/city.ts';
import {OfferShort, OffersShort} from '../../types/offers/offer-short.ts';

const initialState: DataProcess = {
  activeCity: CityObject.Paris,
  offers: [],
  hoverCardId: null,
  sortingOrder: SortingOrder.popular,
};

export const dataProcess = createSlice(
  {
    name: StoreNameSpace.Data,
    initialState,
    reducers: {
      setActiveCity: (state, action: PayloadAction<City>) => {
        state.activeCity = action.payload;
      },
      setHoverCardId: (state, action: PayloadAction<OfferShort['id']>) => {
        state.hoverCardId = action.payload;
      },
      setSortingOrder: (state, action: PayloadAction<SortingOrder>) => {
        state.sortingOrder = action.payload;
      },
      setOffers: (state, action: PayloadAction<OffersShort>) => {
        state.offers = action.payload;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchOffersAction.fulfilled, (state, action) => {
          state.offers = action.payload;
        });
    }
  }
);

export const {setActiveCity, setHoverCardId, setSortingOrder, setOffers} = dataProcess.actions;
