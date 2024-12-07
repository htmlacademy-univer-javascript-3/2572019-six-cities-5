import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token.ts';
import {toast} from 'react-toastify';
import {DetailMessageType, shouldDisplayError} from './error-handle.ts';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        if (error.response.data.details.length) {
          const messages = (error.response.data.details);
          messages.map((property) => {
            property.messages.map((message) => {

              toast.warning(message);
            });
          });
        } else {
          const detailMessage = (error.response.data);
          toast.warn(detailMessage.message);
        }
      }

      throw error;
    }
  );

  return api;
};
