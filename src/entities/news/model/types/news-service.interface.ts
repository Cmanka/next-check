export interface NewsFromApi {
  source: {
    id: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface GetNewsResponse {
  articles: NewsFromApi[];
}

export interface RequestParameters {
  language?: string;
  q?: string;
}
export interface GetNewsVariables extends RequestParameters {}

export interface GetNewsByIdVariables extends RequestParameters {
  id: string;
}
