import { Header } from '@/widgets/header';
import { Meta } from '@/widgets/seo';
import { Sidebar } from '@/widgets/sidebar';

import { PageLoader } from '../loader';
import * as Styled from './wrapper.styles';
import { type WrapperProps } from './wrapper.types';

const WrapperComponent = ({ children, title, description }: WrapperProps) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <Styled.Wrapper>
        <Sidebar />
        <PageLoader>
          <Styled.Container>{children}</Styled.Container>
        </PageLoader>
      </Styled.Wrapper>
    </Meta>
  );
};

export default WrapperComponent;
