import { useTranslation } from 'next-i18next';

import { PageWrapper } from '@/components/layouts/page-wrapper';

import * as Styled from './home.styles';

const HomeScreen = () => {
  const { t } = useTranslation('home');

  return (
    <PageWrapper title={t('seo.title')}>
      <Styled.Title>{t('title')}</Styled.Title>
    </PageWrapper>
  );
};

export default HomeScreen;
