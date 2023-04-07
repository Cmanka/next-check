import { type GetStaticPaths, type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getNews, getNewsById } from '@/entities/news';
import { News, type NewsPageProps, type NewsStaticPath, type NewsStaticProps } from '@/pages/news';
import { AppLanguage } from '@/shared/constants/app-language.constant';

const NewsPage = ({ news }: NewsPageProps) => {
  return <News news={news} />;
};

export const getStaticPaths: GetStaticPaths<NewsStaticPath> = async () => {
  const news = await getNews();
  const paths = news.map((data) => ({ params: { id: data.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<NewsStaticProps, NewsStaticPath> = async ({ params, locale }) => {
  const language = locale ?? AppLanguage.English;
  const translations = await serverSideTranslations(language, ['common', 'news']);
  const news = await getNewsById({ id: params?.id ?? '', language });

  if (!news) {
    return { notFound: true };
  }

  return { props: { ...translations, news }, revalidate: 300 };
};

export default NewsPage;
