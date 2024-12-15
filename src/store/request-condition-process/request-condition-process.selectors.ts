import {AppState} from '../../types/state.ts';
import {NameStore} from '../../constants.ts';
import {RequestStatus} from '../../types/request-status.ts';

export const getRequestStatus = (state: AppState): RequestStatus => state[NameStore.RequestCondition].requestStatus;
