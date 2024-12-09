import {UserProcess} from '../../types/state.ts';
import {AuthStatus, StoreNameSpace} from '../../const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthStatusAction, loginAction, logoutAction} from '../api-actions.ts';

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: StoreNameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatusAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthStatusAction.pending, (state) => {
        state.authorizationStatus = AuthStatus.Unknown;
      })
      .addCase(checkAuthStatusAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.userData = null;
      })

      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.userData = null;
      });
  }
});
