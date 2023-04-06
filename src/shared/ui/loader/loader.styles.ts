import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid
      ${({
        theme: {
          colors: { secondary },
        },
      }) => secondary};
    border-color: ${({
        theme: {
          colors: { secondary },
        },
      }) => secondary}
      transparent
      ${({
        theme: {
          colors: { secondary },
        },
      }) => secondary}
      transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;
