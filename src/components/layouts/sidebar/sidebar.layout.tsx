import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'styled-components';

import { Icon } from '@/components/ui/icon';
import { transformAttribute } from '@/shared/helpers/transform-attribute.helper';

import { sidebarData } from './sidebar.data';
import * as Styled from './sidebar.styles';

const SidebarLayout = () => {
  const { pathname } = useRouter();
  const {
    svg: { fill },
  } = useTheme();
  const { t } = useTranslation('common');

  return (
    <Styled.Wrapper>
      {sidebarData.map(({ label, href, Svg }) => (
        <Styled.Link key={href} href={href} active={transformAttribute(href === pathname)}>
          <Icon SvgIcon={Svg} fill={fill} width={50} height={50} />
          <Styled.Label>{t(`sidebar.${label}`)}</Styled.Label>
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SidebarLayout;
