import NextLink from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: ${({ theme: { layouts } }) => layouts.sidebar.width};
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: 100%;
  padding-top: 20px;
  gap: 15px;
  align-items: center;
`;

interface ActiveProps {
  active: boolean;
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
