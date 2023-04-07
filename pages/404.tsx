import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NotFound } from '@/pages/not-found';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const NotFoundPage = () => {
  return <NotFound />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? AppLanguage.English, ['common']);

  return { props: { ...translations }, revalidate: 10 };
};

export default NotFoundPage;
