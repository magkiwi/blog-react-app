


export const routes = {
  login: '/login',
  signup: '/signup',
  articles: '/articles',
  article: (articleId: string | number = ':articleId') => `/articles/${articleId}`,
}

export const cacheKeys = {
  getUser: 'getUser',
  getArticles: 'getArticles',
  getArticle: 'getArticle',
}