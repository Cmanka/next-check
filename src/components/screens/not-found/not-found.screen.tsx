import { PageWrapper } from '@/components/layouts/page-wrapper';
import { Routes } from '@/utils/constants/routes.constant';

import * as Styled from './not-found.styles';

const NotFoundScreen = () => {
  return (
    <PageWrapper title="Not Found - 404">
      <Styled.InnerWrapper>
        <Styled.Title>Page not found</Styled.Title>
        <Styled.HomeButton label="Go back home" href={Routes.Home} />
      </Styled.InnerWrapper>
    </PageWrapper>
  );
};

export default NotFoundScreen;
