import {useAppSelector} from './redux.ts';
import {AuthStatus} from '../const.ts';

export function useAuthorization() {
  return useAppSelector((state) => state.authorizationStatus) === AuthStatus.Auth;
}
