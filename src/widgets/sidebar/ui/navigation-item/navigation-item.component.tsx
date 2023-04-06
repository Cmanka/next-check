import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { useTheme } from 'styled-components';

import { transformAttribute } from '@/shared/lib/helpers/transform-attribute.helper';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './navigation-item.styles';
import { type NavigationItemProps } from './navigation-item.types';

const NavigationItemComponent = ({ className, item: { Svg, href, label } }: NavigationItemProps) => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');
  const {
    svg: { fill },
  } = useTheme();

  return (
    <Styled.Link className={className} key={href} href={href} active={transformAttribute(href === pathname)}>
      <Icon SvgIcon={Svg} fill={fill} width={50} height={50} />
      <Styled.Label>{t(`sidebar.${label}`)}</Styled.Label>
    </Styled.Link>
  );
};

export default memo(NavigationItemComponent);
