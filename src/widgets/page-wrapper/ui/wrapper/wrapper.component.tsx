import { Suspense } from 'react';

import { Header } from '@/widgets/header';
import { Meta } from '@/widgets/seo';
import { Sidebar } from '@/widgets/sidebar';

import * as Styled from './wrapper.styles';
import { type WrapperProps } from './wrapper.types';

const WrapperComponent = ({ children, title, description }: WrapperProps) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <Styled.Wrapper>
        <Sidebar />
        <Suspense fallback={<div>...loading</div>}>
          <Styled.Container>{children}</Styled.Container>
        </Suspense>
      </Styled.Wrapper>
    </Meta>
  );
};

export default WrapperComponent;
