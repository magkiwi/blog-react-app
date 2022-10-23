import { request } from 'clients/client';
import { AxiosError, AxiosResponse } from 'axios';
import { Article, ArticleApi, GetArticlesParams } from './articleClient.types';
import { mapArticleData } from './articleClient.formatter';

const articleApiBaseUrl = process.env.REACT_API_HOST;

const getArticles = (): Promise<AxiosResponse<Article[]>> => {
  return request({
    options: {
      url: `${articleApiBaseUrl}/articles/`,
      method: 'GET',
    },
  }).then((data: AxiosResponse<any>) => ({
    ...data,
    data: data.data.map(mapArticleData),
  }));
};

const getArticle = (params: GetArticlesParams): Promise<AxiosResponse<Article, AxiosError>> => {
  return request({
    options: {
      url: `${articleApiBaseUrl}/articles/${params.id}/`,
      method: 'GET',
    },
  }).then((data: AxiosResponse<ArticleApi>) => ({
    ...data,
    data: mapArticleData(data.data),
  }));
};


export const articleClient = {
  getArticles,
  getArticle,
};