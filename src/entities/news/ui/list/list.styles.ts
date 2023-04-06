import styled from 'styled-components';

import { NewsCard } from '../card';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Card = styled(NewsCard)`
  flex: 30%;
  max-width: 30%;
`;

export const EmptyTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
