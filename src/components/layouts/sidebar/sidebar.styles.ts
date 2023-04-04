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
  isActive: boolean;
}

export const Link = styled(NextLink)<ActiveProps>`
  font-size: 16px;
  text-align: center;
  opacity: ${({ isActive }) => (isActive ? 0.7 : 1)};
`;
