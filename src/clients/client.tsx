import axiosRequest, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getAccessToken } from 'helpers/tokens'

export type AbstractRequest = (props: { options: AxiosRequestConfig; authenticate?: boolean; maxRetries?: number; }) => Promise<AxiosResponse>;

export const request: AbstractRequest =  async ({ options, authenticate = true, maxRetries = 3 }): Promise<AxiosResponse> => {
  const token = getAccessToken();
  return axiosRequest({
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
      ...(authenticate && {
        'Authorization': 'Bearer ' + token,
      }),
    }
  }).catch((e) => {
    throw(e);
  });
};