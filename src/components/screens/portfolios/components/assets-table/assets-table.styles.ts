import styled, { css } from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.thead``;

export const Body = styled.tbody`
  border: 2px solid #8798f8;
`;

export const Row = css`
  float: left;
  text-align: center;
  width: 25%;
`;

export const Th = styled.th`
  ${Row};
  padding: 10px 0;
  background-color: #202125;
  border: 2px solid #8798f8;
`;

export const Td = styled.td`
  ${Row};
  padding: 10px 0;
  background-color: #202125;
`;

export const Tr = styled.tr`
  float: left;
  width: 100%;
  border-bottom: 2px solid #8798f8;
`;
