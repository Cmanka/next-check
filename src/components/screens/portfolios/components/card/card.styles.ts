import styled from 'styled-components';

import { ButtonLink } from '@/components/ui/button-link';

export const Wrapper = styled.div``;

export const Header = styled.div`
  background-color: #202125;
  text-align: center;
  color: #8798f8;
  margin-bottom: 15px;
  font-size: 24px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(135, 152, 248, 0.2), 0 6px 20px 0 rgba(135, 152, 248, 0.19);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #202125;
  padding: 12px 24px;
  box-shadow: 0 4px 8px 0 rgba(135, 152, 248, 0.2), 0 6px 20px 0 rgba(135, 152, 248, 0.19);
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const DetailLink = styled(ButtonLink)`
  max-width: 195px;
  text-align: center;
  margin: 0 auto;
`;
