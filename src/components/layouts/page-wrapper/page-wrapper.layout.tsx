import { Seo } from '@/components/layouts/seo';

import { Header } from '../header';
import { Sidebar } from '../sidebar';
import * as Styled from './page-wrapper.styles';
import { type PageWrapperProps } from './page-wrapper.types';

const PageWrapperLayout = ({ children, title, description }: PageWrapperProps) => {
  return (
    <Seo title={title} description={description}>
      <Header />
      <Styled.Wrapper>
        <Sidebar />
        <Styled.Container>{children}</Styled.Container>
      </Styled.Wrapper>
    </Seo>
  );
};

export default PageWrapperLayout;
