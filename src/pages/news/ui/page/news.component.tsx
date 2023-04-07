import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import { type NewsPageProps } from '@/pages/news';
import { PageWrapper } from '@/widgets/page-wrapper';

import { NewsCard } from '../news-card';
import * as Styled from './news.styles';

const NewsComponent = ({ news }: NewsPageProps) => {
  const { t } = useTranslation('news');

  return (
    <PageWrapper title={`${t('seo.title')} ${news.id}`}>
      <Styled.InnerWrapper>
        <Styled.Title>
          {t('title')} {news.id}
        </Styled.Title>
        <NewsCard {...news} />
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default memo(NewsComponent);
