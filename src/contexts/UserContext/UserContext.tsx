import React, { useMemo, createContext, FC, ReactNode, useState } from 'react';
import { useQuery } from "react-query";
import { userClient } from 'clients/user/userClient';
import { User } from 'clients/user/userClient.types';
import { Login } from 'clients/user/userClient.types';
import { cacheKeys } from 'config';


export const defaultContext: any = {
  isLoggedIn: false,
  userName: '',
  login: () => {},
  userPermissions: [],
  isAdmin: false,
};

export const UserContext = createContext(defaultContext);
export const UserContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {

  const [isLoggingIn, setIsLoggingIn] = useState(false);


  const { data: { data: user = {} as User } = {} } = useQuery(
    cacheKeys.getUser,
    userClient.getMe,
    { enabled: isLoggingIn },)


  const userPermissions = useMemo(() => user?.permissions || [], [user]);
  const userName = useMemo(() => user?.firstName || '', [user]);
  const isAdmin = useMemo(() => {
    if (user && isLoggingIn) {
      const admin = user?.groups?.name.toLowerCase() === 'admin' ? true : false;
      return admin
    }
    return false

  }, [user, isLoggingIn]);



  const login = async (data: Login) => {
    try {
      const response = await userClient.login(data);
      if (response.data.response){
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        setIsLoggingIn(true);
      }
      return Promise.resolve({
        success: !!response,
      });
    } catch (error: any) {
      return Promise.reject({
        success: false,
        error: error.code,
        message: error.message,
      });
    }
  };



  return (
    <UserContext.Provider
      value={{
        isLoggingIn,
        userName,
        login,
        userPermissions,
        isAdmin,
    }} >
      {children}
    </UserContext.Provider>
);
}
