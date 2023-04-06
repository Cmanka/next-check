import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getNews } from '@/entities/news';
import { Home, type HomeStaticProps } from '@/screens/home';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const HomePage = ({ news }: HomeStaticProps) => {
  return <Home news={news} />;
};

export const getStaticProps: GetStaticProps<HomeStaticProps> = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? AppLanguage.English, ['common', 'home']);
  const news = await getNews();

  return { props: { news, ...translations }, revalidate: 10 };
};

export default HomePage;
