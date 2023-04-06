import NextLink from 'next/link';
import styled from 'styled-components';

interface ActiveProps {
  active: string;
}

export const Link = styled(NextLink)<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: ${({ active }) => (active ? 0.7 : 1)};
`;

export const Label = styled.span`
  font-size: 12px;
`;
