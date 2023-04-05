import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: ${({ theme: { layouts } }) => layouts.header.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoinWrapper = styled.div`
  height: ${({ theme: { layouts } }) => layouts.header.height};
  width: ${({ theme: { layouts } }) => layouts.sidebar.width};
  background-color: ${({ theme: { colors } }) => colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 50%;
    height: 50%;
  }
`;

export const RightSection = styled.div`
  display: flex;
`;

export const RightItem = styled.div`
  height: ${({ theme: { layouts } }) => layouts.header.height};
  width: ${({ theme: { layouts } }) => layouts.header.height};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;
  border-left: 2px solid ${({ theme: { colors } }) => colors.font};

  &:hover {
    opacity: 0.7;
  }

  & svg {
    width: 50%;
    height: 50%;
  }
`;
