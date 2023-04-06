import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: ${({ theme: { layouts } }) => `calc(100vh - ${layouts.header.height})`};
`;

export const Container = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme: { colors } }) => colors.primary};
  }

  &::-webkit-scrollbar-thumb {
    width: 15px;
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
