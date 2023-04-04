import styled from 'styled-components';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  & > div {
    max-width: 33%;
  }
`;
