import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  color: ${({ theme: { colors } }) => colors.font};
  padding: 12px 24px;
  text-transform: uppercase;
  transition: opacity 0.25s ease-in-out;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.6;
  }
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;
