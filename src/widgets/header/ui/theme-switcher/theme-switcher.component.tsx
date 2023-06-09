import { useTheme } from 'styled-components';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './theme-switcher.styles';

const ThemeSwitcherComponent = () => {
  const {
    svg: { stroke, fill },
    toggleTheme,
  } = useTheme();

  return (
    <Styled.RightItem onClick={toggleTheme}>
      <Icon SvgIcon={ThemeIcon} fill={fill} stroke={stroke} />
    </Styled.RightItem>
  );
};

export default ThemeSwitcherComponent;
