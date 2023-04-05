import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HomeScreen } from '@/components/screens/home';

const HomePage = () => {
  return <HomeScreen />;
};

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common', 'home']);

  return { props: { ...translations }, revalidate: 10 };
};

export default HomePage;
