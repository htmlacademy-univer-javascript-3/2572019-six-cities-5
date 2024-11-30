import {createAsyncThunk} from '@reduxjs/toolkit';
import {OffersShort} from '../types/offers/offer-short.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const.ts';
import {AppDispatch} from './index.tsx';
import {setOffersLoading} from './actions.ts';


export const fetchOffers = createAsyncThunk<
  OffersShort,
  undefined,{
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoading(true));
    const {data} = await api.get<OffersShort>(APIRoute.Offers);
    dispatch(setOffersLoading(false));
    return data;
  },
);
