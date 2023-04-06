import styled from 'styled-components';

import { ButtonLink } from '@/shared/ui/button-link';

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 34px;
`;

export const HomeButton = styled(ButtonLink)`
  margin-top: 15px;
`;
