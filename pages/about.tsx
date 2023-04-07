import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { About } from '@/pages/about';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const AboutPage = () => {
  return <About />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? AppLanguage.English, ['common', 'about']);

  return { props: { ...translations }, revalidate: 10 };
};

export default AboutPage;
