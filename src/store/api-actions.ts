import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferShort, OffersShort} from '../types/offers/offer-short.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthStatus} from '../const.ts';
import {AppDispatch, RootState} from './index.tsx';
import {redirectToRoute, setAuthStatus, setUserData} from './actions.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {OfferDetailed} from '../types/offers/offer-detailed.ts';
import {Review, ReviewData, Reviews} from '../types/review.ts';
import {Nullable} from '../types/nullable.ts';


type ExtraData = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<OffersShort, undefined, ExtraData>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersShort>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Nullable<OfferDetailed>, OfferDetailed['id'], ExtraData>(
  'data/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`${APIRoute.Offers}/${offerId}`);

    return data;
  },
);

export const fetchNearPlacesAction = createAsyncThunk<OffersShort, OfferShort['id'], ExtraData>(
  'data/fetchNearPlaces',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OffersShort>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);

    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, OfferShort['id'], ExtraData>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);

    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review, {reviewData: ReviewData; offerId: OfferShort['id']}, ExtraData>(
  'reviews/postReview',
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, reviewData);

    return data;
  },
);

export const checkAuthStatusAction = createAsyncThunk<Nullable<UserData>, undefined, ExtraData>(
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

export const loginAction = createAsyncThunk<void, AuthData, ExtraData>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthStatus(AuthStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ExtraData>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(setUserData(null));
  },
);
