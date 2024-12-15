import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameStore} from '../../constants.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {RequestProcess} from '../../types/state.ts';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  postReviewAction
} from '../api-actions.ts';

const initialState: RequestProcess = {
  requestStatus: RequestStatus.Idle,
};

export const requestConditionProcess = createSlice(
  {
    name: NameStore.RequestCondition,
    initialState,
    reducers: {
      setRequestStatus: (state, action: PayloadAction<RequestStatus>) => {
        state.requestStatus = action.payload;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchOffersAction.fulfilled, (state) => {
          state.requestStatus = RequestStatus.Success;
        })
        .addCase(fetchOffersAction.pending, (state) => {
          state.requestStatus = RequestStatus.Process;
        })
        .addCase(fetchOffersAction.rejected, (state) => {
          state.requestStatus = RequestStatus.Error;
        })

        .addCase(fetchOfferAction.fulfilled, (state) => {
          state.requestStatus = RequestStatus.Success;
        })
        .addCase(fetchOfferAction.pending, (state) => {
          state.requestStatus = RequestStatus.Process;
        })
        .addCase(fetchOfferAction.rejected, (state) => {
          state.requestStatus = RequestStatus.Error;
        })

        .addCase(fetchNearbyOffersAction.fulfilled, (state,) => {
          state.requestStatus = RequestStatus.Success;
        })
        .addCase(fetchNearbyOffersAction.pending, (state) => {
          state.requestStatus = RequestStatus.Process;
        })
        .addCase(fetchNearbyOffersAction.rejected, (state) => {
          state.requestStatus = RequestStatus.Error;
        })

        .addCase(fetchReviewsAction.fulfilled, (state) => {
          state.requestStatus = RequestStatus.Success;
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
        .addCase(postReviewAction.fulfilled, (state) => {
          state.requestStatus = RequestStatus.Success;
        });
    }
  }
);

export const {setRequestStatus} = requestConditionProcess.actions;
