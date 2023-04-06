import axios from 'axios';

export const NEWS_API_URL = process.env.NEWS_API_URL;

export const newsApi = axios.create({
  baseURL: NEWS_API_URL,
});

newsApi.defaults.headers.common['X-Api-Key'] = process.env.NEWS_API_KEY;
