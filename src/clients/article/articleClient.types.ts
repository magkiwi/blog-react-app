
export type GetArticlesParams = {
  id: number;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  updatedOn: Date;
  content: string;
  createdOn: string;
  cancelledAt:  Date;
  author: number;
  category: [];
}

export type ArticleApi = {
  id: number;
  title: string;
  slug: string;
  updated_on: Date;
  content: string;
  created_on: string;
  cancelled_at:  Date;
  author: number;
  category: [];
}
