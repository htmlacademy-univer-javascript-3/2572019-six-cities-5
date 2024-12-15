import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../browser-history.ts';
import {Middleware} from 'redux';
import {appReducer} from './app-reducer.ts';

type Reducer = ReturnType<typeof appReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
