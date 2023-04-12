import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 15px;
  font-size: 24px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(135, 152, 248, 0.2), 0 6px 20px 0 rgba(135, 152, 248, 0.19);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  box-shadow: 0 4px 8px 0 rgba(135, 152, 248, 0.2), 0 6px 20px 0 rgba(135, 152, 248, 0.19);
`;

export const Description = styled.p`
  font-size: 18px;
  padding: 24px 12px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
  flex: 1;
`;
