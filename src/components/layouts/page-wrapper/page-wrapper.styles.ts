import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: calc(100vh - 75px);
`;

export const Container = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #202125;
  }

  &::-webkit-scrollbar-thumb {
    width: 15px;
    background-color: #8798f8;
  }
`;
