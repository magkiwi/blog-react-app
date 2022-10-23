import { Article, ArticleApi } from './articleClient.types';

export const mapArticleData = (data: ArticleApi): Article => ({
  id: data.id,
  title: data.title,
  slug: data.slug,
  updatedOn: data.updated_on,
  content: data.content,
  createdOn: data.created_on,
  cancelledAt:  data.cancelled_at,
  author: data.author,
  category: data.category,
});