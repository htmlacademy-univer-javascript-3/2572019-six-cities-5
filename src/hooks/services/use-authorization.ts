import {useAppSelector} from './redux.ts';
import {AuthStatus} from '../../constants.ts';
import {getAuthStatus} from '../../store/user-process/user-process.selectors.ts';

export function useAuthorization() {
  return useAppSelector(getAuthStatus) === AuthStatus.Auth;
}
