import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { cacheKeys } from 'config';
import { articleClient}  from 'clients/article/articleClient';
import { Article } from 'clients/article/articleClient.types';

export type Params = {
  id: number;
};

export const useArticle = (params: Params) => {
  const { data: { data: article = {} as Article } = {}, status, error } = useQuery(
    [cacheKeys.getArticle, params],
    () => articleClient.getArticle(params),
  );

  return {
    status,
    error: error as AxiosError,
    article,
  };
};
