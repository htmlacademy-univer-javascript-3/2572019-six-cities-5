import {createAsyncThunk} from '@reduxjs/toolkit';
import {BriefOffer, BriefOffers} from '../types/offers/brief-offer.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, NameStore} from '../constants.ts';
import {redirectToRoute} from './action.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {DetailedOffer} from '../types/offers/detailed-offer.ts';
import {Review, ReviewData, Reviews} from '../types/review.ts';
import {Nullable} from '../types/nullable.ts';
import {AppDispatch, AppState} from '../types/state.ts';

type ExtraData = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

export const fetchFavoritesAction = createAsyncThunk<BriefOffers, undefined, ExtraData>(
  `${NameStore.FavoriteData}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<BriefOffers>(APIRoute.Favorite);

    return data;
  },
);

export const toggleOfferFavoriteStatus = createAsyncThunk<DetailedOffer | BriefOffer, BriefOffer | DetailedOffer, ExtraData>(
  `${NameStore.FavoriteData}/toggleOfferFavoriteStatus`,
  async (offer, {extra: api}) => {
    const newStatus = offer.isFavorite ? 0 : 1;
    const {data} = await api.post<DetailedOffer | BriefOffer>(`${APIRoute.Favorite}/${offer.id}/${newStatus}`);

    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<BriefOffers, undefined, ExtraData>(
  `${NameStore.Data}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<BriefOffers>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Nullable<DetailedOffer>, DetailedOffer['id'], ExtraData>(
  `${NameStore.DetailedData}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<DetailedOffer>(`${APIRoute.Offers}/${offerId}`);

    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<BriefOffers, BriefOffer['id'], ExtraData>(
  `${NameStore.DetailedData}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<BriefOffers>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);

    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, BriefOffer['id'], ExtraData>(
  `${NameStore.DetailedData}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);

    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review, {reviewData: ReviewData; offerId: BriefOffer['id']}, ExtraData>(
  `${NameStore.DetailedData}/postReview`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, reviewData);

    return data;
  },
);

export const fetchUserData = createAsyncThunk<Nullable<UserData>, undefined, ExtraData>(
  `${NameStore.User}/fetchUserData`,
  async (_arg, {extra: api, dispatch}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoritesAction());

    return data;
  },
);

export const loginAction = createAsyncThunk<Nullable<UserData>, AuthData, ExtraData>(
  `${NameStore.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchFavoritesAction());

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ExtraData>(
  `${NameStore.User}/logout`,
  async (_arg, {extra: api, dispatch}) => {
    await api.delete(APIRoute.Logout);
    dropToken();

    dispatch(fetchOffersAction());
  },
);
