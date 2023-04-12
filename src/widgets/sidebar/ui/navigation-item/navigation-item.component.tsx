import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useTheme } from 'styled-components';

import { transformAttribute } from '@/shared/lib/helpers/transform-attribute.helper';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './navigation-item.styles';
import { type NavigationItemProps } from './navigation-item.types';

const NavigationItemComponent: FC<NavigationItemProps> = ({ className, item: { Svg, href, label } }) => {
  const { pathname } = useRouter();
  const {
    svg: { fill },
  } = useTheme();

  return (
    <Styled.Link className={className} key={href} href={href} active={transformAttribute(href === pathname)}>
      <Icon SvgIcon={Svg} fill={fill} width={50} height={50} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Link>
  );
};

export default memo(NavigationItemComponent);
