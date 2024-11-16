import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';

export const setActiveCity = createAction<City>('setCity');
