import { useTranslation } from 'next-i18next';

import { Routes } from '@/shared/constants/routes.constant';
import { PageWrapper } from '@/widgets/page-wrapper';

import * as Styled from './not-found.styles';

const NotFoundComponent = () => {
  const { t } = useTranslation('common');
  return (
    <PageWrapper title={t('notfound.seo.title')}>
      <Styled.InnerWrapper>
        <Styled.Title>{t('notfound.title')}</Styled.Title>
        <Styled.HomeButton label={t('notfound.button.text')} href={Routes.Home} />
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default NotFoundComponent;
