import { useTranslation } from 'next-i18next';

import { NewsList } from '@/entities/news';
import { PageWrapper } from '@/widgets/page-wrapper';

import * as Styled from './home.styles';
import { type HomeProps } from './home.types';

const HomeComponent = ({ news }: HomeProps) => {
  const { t } = useTranslation('home');

  return (
    <PageWrapper title={t('seo.title')}>
      <Styled.InnerWrapper>
        <Styled.Title>{t('title')}</Styled.Title>
        <NewsList news={news} />
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default HomeComponent;
