import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AboutScreen } from '@/components/screens/about';

const About = () => {
  return <AboutScreen />;
};

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common', 'about']);

  return { props: { ...translations }, revalidate: 10 };
};

export default About;
