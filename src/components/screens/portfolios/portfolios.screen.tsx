import { memo } from 'react';

import { PageWrapper } from '@/components/layouts/page-wrapper';

import { Card } from './components/card';
import * as Styled from './portfolios.styles';
import { type PortfoliosServerSideProps } from './portfolios.types';

const PortfoliosScreen = ({ portfolios }: PortfoliosServerSideProps) => {
  return (
    <PageWrapper title="Portfolio">
      <Styled.InnerWrapper>
        <Styled.Title>Portfolio</Styled.Title>
        <Styled.Cards>
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} {...portfolio} />
          ))}
        </Styled.Cards>
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default memo(PortfoliosScreen);
