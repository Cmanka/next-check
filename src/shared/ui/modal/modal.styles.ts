import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme: { colors } }) => colors.primary};
`;
