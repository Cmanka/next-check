import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getNews } from '@/entities/news';
import { Home, type HomeStaticProps } from '@/pages/home';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const HomePage = ({ news }: HomeStaticProps) => {
  return <Home news={news} />;
};

export const getStaticProps: GetStaticProps<HomeStaticProps> = async ({ locale }) => {
  const language = locale ?? AppLanguage.English;
  const translations = await serverSideTranslations(language, ['common', 'home']);
  const news = await getNews({ language });

  return { props: { news, ...translations }, revalidate: 10 };
};

export default HomePage;
