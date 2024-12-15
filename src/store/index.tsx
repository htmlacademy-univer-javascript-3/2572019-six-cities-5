import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api.ts';
import {redirect} from './redirect.ts';
import {appReducer} from './app-reducer.ts';

const api = createAPI();

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});
