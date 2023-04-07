import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portfolios } from '@/pages/portfolios';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const PortfoliosPage = () => {
  return <Portfolios />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? AppLanguage.English, ['common', 'portfolios']);

  return { props: { ...translations }, revalidate: 10 };
};

export default PortfoliosPage;
