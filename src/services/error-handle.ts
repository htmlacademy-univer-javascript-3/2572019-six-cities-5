import {StatusCodes} from 'http-status-codes';
import {AxiosResponse} from 'axios';

export type DetailMessageType = {
  errorType: string;
  message: string;
  details: [{
    property: string;
    value: string;
    messages: [string];
  }];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];
