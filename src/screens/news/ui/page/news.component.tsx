import { memo } from 'react';

import { type NewsPageProps } from '@/screens/news';
import { PageWrapper } from '@/widgets/page-wrapper';

import { NewsCard } from '../news-card';
import * as Styled from './news.styles';

const NewsComponent = ({ news }: NewsPageProps) => {
  return (
    <PageWrapper>
      <Styled.InnerWrapper>
        <Styled.Title>News number {news.id}</Styled.Title>
        <NewsCard {...news} />
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default memo(NewsComponent);
