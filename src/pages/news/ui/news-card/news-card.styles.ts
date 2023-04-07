import styled from 'styled-components';

import { ButtonLink } from '@/shared/ui/button-link';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1080px;
`;

export const Title = styled.h3`
  font-size: 32px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Description = styled.span`
  font-size: 18px;
  opacity: 0.65;
  margin-right: 5px;
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const HomeButton = styled(ButtonLink)`
  align-self: flex-start;
`;

export const OriginLink = styled.a`
  font-size: 18px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary};
`;

export const DescriptionWrapper = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;
