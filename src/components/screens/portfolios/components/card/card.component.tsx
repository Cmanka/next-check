import { memo } from 'react';

import { Input } from '@/components/ui/input';
import { Routes } from '@/utils/constants/routes.constant';

import { AssetsTable } from '../assets-table';
import * as Styled from './card.styles';
import { type CardProps } from './card.types';

const CardComponent = ({ id, assets, description, title, className }: CardProps) => {
  return (
    <Styled.Wrapper className={className}>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Content>
        <Styled.Description>{description}</Styled.Description>
        <Input placeholder="Filter assets" />
        <AssetsTable assets={assets} />
        <Styled.DetailLink label="Go to details" href={Routes.Portfolio.replace(':id', id)} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default memo(CardComponent);
