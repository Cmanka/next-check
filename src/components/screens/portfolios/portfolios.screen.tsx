import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import { PageWrapper } from '@/components/layouts/page-wrapper';

import { Card } from './components/card';
import * as Styled from './portfolios.styles';
import { type PortfoliosServerSideProps } from './portfolios.types';

const PortfoliosScreen = ({ portfolios }: PortfoliosServerSideProps) => {
  const { t } = useTranslation('portfolios');

  return (
    <PageWrapper title={t('seo.title')}>
      <Styled.InnerWrapper>
        <Styled.Title>{t('title')}</Styled.Title>
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
