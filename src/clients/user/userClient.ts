import { Login, User, UserApi} from "./userClient.types";
import { request } from 'clients/client';
import { AxiosResponse } from "axios";
import { mapUserData } from "./userClient.formatter";

const usersApiBaseUrl = process.env.REACT_API_HOST;

const login = (data: Login) => {
  return request({
    authenticate: false,
    options: {
      url: `${usersApiBaseUrl}/login/`,
      method: 'POST',
      data,
    },
  });
};

const getMe = (): Promise<AxiosResponse<User>> => {
  return request({
    options: {
      url: `${usersApiBaseUrl}/users/me/`,
      method: 'GET',
    },
  }).then((data: AxiosResponse<UserApi>) => ({
      ...data,
      data: mapUserData(data.data),
    }));
};

export const userClient = {
  login,
  getMe,
};