import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

import { newsApi } from '../config/api.config';
import { type News } from '../types/news.interface';
import { type GetNewsByIdVariables } from '../types/news-service.interface';
import { getNews } from './get-news.service';

export const getFullContent = async (url: string) => {
  const { data } = await newsApi.get(url);
  const dom = new JSDOM(data, {
    url,
  });
  const article = new Readability(dom.window.document).parse();

  return article?.textContent ?? '';
};

export const getNewsById = async ({ language, id }: GetNewsByIdVariables): Promise<News> => {
  try {
    const newsResponse = await getNews({ language });
    const news = newsResponse.find((data) => data.id === id);

    if (!news) {
      throw new Error('Not found');
    }

    const fullContent = await getFullContent(news.url);

    return { ...news, content: fullContent };
  } catch (e) {
    throw new Error('Cannot get news');
  }
};
