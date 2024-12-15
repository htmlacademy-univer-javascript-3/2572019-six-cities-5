import {StatusCodes} from 'http-status-codes';
import {AxiosResponse} from 'axios';

export const SERVER_MINIMAL_ERROR_CODE = 500;

export type DetailedMessageType = {
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
  [StatusCodes.NOT_FOUND]: true,
};

export const shouldDisplayError = (response: AxiosResponse) =>
  response.status >= SERVER_MINIMAL_ERROR_CODE ? true : StatusCodeMapping[response.status];
