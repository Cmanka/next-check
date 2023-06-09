import { useTranslation } from 'next-i18next';

import { PageWrapper } from '@/widgets/page-wrapper';

import * as Styled from './about.styles';

const AboutComponent = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper title={t('seo.title')}>
      <Styled.InnerWrapper>
        <Styled.Title>{t('title')}</Styled.Title>
        <Styled.Description>{t('description')}</Styled.Description>
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default AboutComponent;
