import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import { withAuth } from '@/shared/lib/hocs/with-auth.hoc';
import { PageWrapper } from '@/widgets/page-wrapper';

import * as Styled from './portfolios.styles';

const PortfoliosComponent = () => {
  const { t } = useTranslation('portfolios');

  return (
    <PageWrapper title={t('seo.title')}>
      <Styled.InnerWrapper>
        <Styled.Title>{t('title')}</Styled.Title>
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default memo(withAuth(PortfoliosComponent));
