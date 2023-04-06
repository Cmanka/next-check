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
