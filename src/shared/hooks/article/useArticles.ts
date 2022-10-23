import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { cacheKeys } from 'config';
import { articleClient } from 'clients/article/articleClient';


export const useArticles = () => {
  const {data: { data: articles = [] } = {} , status, error } = useQuery(
    [cacheKeys.getArticles],
    () => articleClient.getArticles(),
  );

  return {
    status,
    error: error as AxiosError,
    articles: articles || [],
  };
};
