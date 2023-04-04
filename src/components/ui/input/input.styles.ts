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
  border: 2px solid #fff;
  background-color: #303135;
  color: #fff;
  font-size: 16px;
  caret-color: transparent;
  transition: all 0.15s ease-out;

  &:focus {
    border: 2px solid #8798f8;
  }

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;
