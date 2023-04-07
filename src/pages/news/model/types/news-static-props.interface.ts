import { type SSRConfig } from 'next-i18next';

import { type News } from '@/entities/news';

export interface NewsStaticProps extends SSRConfig {
  news?: News;
}
