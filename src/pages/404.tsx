import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NotFound } from '@/screens/not-found';

const NotFoundPage = () => {
  return <NotFound />;
};

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common']);

  return { props: { ...translations }, revalidate: 10 };
};

export default NotFoundPage;
