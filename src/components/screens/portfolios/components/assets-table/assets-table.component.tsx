import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { useTheme } from 'styled-components';

import { Icon } from '@/components/ui/icon';
import PlusIcon from '@/shared/assets/plus.svg';

import { tableHeader } from './assets-table.data';
import * as Styled from './assets-table.styles';
import { type AssetsTableProps } from './assets-table.types';

const AssetsTableComponent = ({ assets }: AssetsTableProps) => {
  const {
    svg: { fill },
  } = useTheme();
  const { t } = useTranslation('portfolios');

  if (!assets?.length) {
    return null;
  }

  return (
    <Styled.Table>
      <Styled.Header>
        <Styled.Tr>
          {tableHeader.map((label) => (
            <Styled.Th key={label}>{t(`table.${label}`)}</Styled.Th>
          ))}
        </Styled.Tr>
      </Styled.Header>
      <Styled.Body>
        {assets.map(({ id, symbol, marketCap, change24h }) => (
          <Styled.Tr key={id}>
            <Styled.Td>{symbol}</Styled.Td>
            <Styled.Td>{marketCap}</Styled.Td>
            <Styled.Td>{change24h}</Styled.Td>
            <Styled.Td>
              <Icon SvgIcon={PlusIcon} fill={fill} width={30} height={30} />
            </Styled.Td>
          </Styled.Tr>
        ))}
      </Styled.Body>
    </Styled.Table>
  );
};

export default memo(AssetsTableComponent);
