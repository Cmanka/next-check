import { type News } from '@/entities/news';

export interface CardProps {
  className?: string;
  news: News;
}
