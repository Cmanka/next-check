import { useTranslation } from 'next-i18next';

import { PageWrapper } from '@/components/layouts/page-wrapper';
import { Routes } from '@/shared/constants/routes.constant';

import * as Styled from './not-found.styles';

const NotFoundScreen = () => {
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

export default NotFoundScreen;
