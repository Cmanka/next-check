import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { About } from '@/screens/about';

const AboutPage = () => {
  return <About />;
};

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common', 'about']);

  return { props: { ...translations }, revalidate: 10 };
};

export default AboutPage;
