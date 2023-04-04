import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 8px 16px;
  border: 2px solid ${({ theme: { colors } }) => colors.font};
  background-color: ${({ theme: { colors } }) => colors.bodyBackgroundColor};
  color: ${({ theme: { colors } }) => colors.font};
  font-size: 16px;
  caret-color: transparent;
  transition: all 0.15s ease-out;

  &:focus {
    border: 2px solid ${({ theme: { colors } }) => colors.secondary};
  }

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.font};
    opacity: 0.7;
  }
`;
