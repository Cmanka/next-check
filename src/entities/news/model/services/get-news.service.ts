import { newsApi } from '@/entities/news/model/config/api.config';

import { type News } from '../types/news.interface';
import { type GetNewsResponse, type NewsFromApi } from '../types/news-service.interface';

const parseResponse = (news: NewsFromApi[]): News[] =>
  news.map((data, index) => ({ id: String(index + 1), image: data?.urlToImage ?? '', ...data }));

export const getNews = async (): Promise<News[]> => {
  try {
    const { data } = await newsApi.get<GetNewsResponse[]>('/everything', {
      params: { q: 'bitcoin' },
    });

    if (!data?.articles?.length) {
      return [];
    }

    return parseResponse(data.articles);
  } catch (e) {
    throw new Error('Cannot get news');
  }
};
