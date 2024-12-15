import {combineReducers} from '@reduxjs/toolkit';
import {NameStore} from '../constants.ts';
import {requestConditionProcess} from './request-condition-process/request-condition-process.slice.ts';
import {dataProcess} from './data-process/data-process.slice.ts';
import {userProcess} from './user-process/user-process.slice.ts';
import {detailedDataProcess} from './detailed-data-process/detailed-data-process.slice.ts';
import {favoriteDataProcess} from './favorite-data-process/favorite-data-process.slice.ts';

export const appReducer = combineReducers({
  [NameStore.Data]: dataProcess.reducer,
  [NameStore.User]: userProcess.reducer,
  [NameStore.DetailedData]: detailedDataProcess.reducer,
  [NameStore.RequestCondition]: requestConditionProcess.reducer,
  [NameStore.FavoriteData]: favoriteDataProcess.reducer,
});
