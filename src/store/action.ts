import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../constants.ts';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
