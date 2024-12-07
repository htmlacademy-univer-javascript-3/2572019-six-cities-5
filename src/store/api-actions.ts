import {createAsyncThunk} from '@reduxjs/toolkit';
import {OffersShort} from '../types/offers/offer-short.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthStatus} from '../const.ts';
import {AppDispatch, RootState} from './index.tsx';
import {setAuthStatus, setOffersLoading, setUserData} from './actions.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';


export const fetchOffersAction = createAsyncThunk<
  OffersShort,
  undefined, {
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

export const checkAuthStatusAction = createAsyncThunk<UserData | null, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setUserData(data));
      return data;
    } catch {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
      return null;
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthStatus(AuthStatus.Auth));

    dispatch(setUserData(data));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(setUserData(null));
  },
);
