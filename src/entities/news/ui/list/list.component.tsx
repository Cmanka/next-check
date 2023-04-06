import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import * as Styled from './list.styles';
import { type ListProps } from './list.types';

const ListComponent = ({ news }: ListProps) => {
  const { t } = useTranslation('common');

  if (!news?.length) {
    return (
      <Styled.Wrapper>
        <Styled.EmptyTitle>{t('empty.list')}</Styled.EmptyTitle>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      {news.map((data) => (
        <Styled.Card key={data.id} news={data} />
      ))}
    </Styled.Wrapper>
  );
};

export default memo(ListComponent);
