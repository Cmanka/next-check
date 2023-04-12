import styled from 'styled-components';

import { NewsCard } from '../card';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 45px;
  grid-template-rows: 1fr;
  grid-row-gap: 30px;
`;

export const Card = styled(NewsCard)``;

export const EmptyTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
