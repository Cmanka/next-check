import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PortfoliosScreen, type PortfoliosServerSideProps } from '@/components/screens/portfolios';
import { AppLanguage } from '@/shared/constants/app-language.constant';
import { PortfolioService } from '@/shared/services/portfolio.service';

const PortfoliosPage = ({ portfolios }: PortfoliosServerSideProps) => {
  return <PortfoliosScreen portfolios={portfolios} />;
};

export const getStaticProps: GetStaticProps<PortfoliosServerSideProps> = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? AppLanguage.English, ['common', 'portfolios']);
  const portfolios = await PortfolioService.getPortfolios();

  return { props: { portfolios, ...translations }, revalidate: 10 };
};

export default PortfoliosPage;
