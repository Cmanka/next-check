import { type SSRConfig } from 'next-i18next';

import { type Portfolio } from '@/shared/interfaces/portfolio.interface';

export interface PortfoliosServerSideProps extends SSRConfig {
  portfolios: Portfolio[];
}
