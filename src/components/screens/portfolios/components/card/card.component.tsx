import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import { Input } from '@/components/ui/input';
import { Routes } from '@/shared/constants/routes.constant';
import { parseUrlById } from '@/shared/helpers/parse-url-by-id.helper';

import { AssetsTable } from '../assets-table';
import * as Styled from './card.styles';
import { type CardProps } from './card.types';

const CardComponent = ({ id, assets, description, title, className }: CardProps) => {
  const { t } = useTranslation('portfolios');

  return (
    <Styled.Wrapper className={className}>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Content>
        <Styled.Description>{description}</Styled.Description>
        <Input placeholder={t('filters.placeholder')} />
        <AssetsTable assets={assets} />
        <Styled.DetailLink label={t('navigation.text')} href={parseUrlById(id, Routes.Portfolio)} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default memo(CardComponent);
