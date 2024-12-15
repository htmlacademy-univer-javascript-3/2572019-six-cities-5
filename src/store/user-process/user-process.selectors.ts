import {AppState} from '../../types/state.ts';
import {AuthStatus, NameStore} from '../../constants.ts';
import {UserData} from '../../types/user-data.ts';
import {Nullable} from '../../types/nullable.ts';

export const getUserData = (state: AppState): Nullable<UserData> => state[NameStore.User].userData;
export const getAuthStatus = (state: AppState): AuthStatus => state[NameStore.User].authorizationStatus;
