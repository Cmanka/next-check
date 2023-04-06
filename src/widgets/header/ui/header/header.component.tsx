import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import CoinIcon from '@/shared/assets/icons/coin.svg';
import { Icon } from '@/shared/ui/icon';

import { LanguageSwitcher } from '../language-switcher';
import { ThemeSwitcher } from '../theme-switcher';
import * as Styled from './header.styles';

const HeaderComponent = () => {
  const {
    svg: { stroke },
  } = useContext(ThemeContext);

  return (
    <Styled.Wrapper>
      <Styled.CoinWrapper>
        <Icon SvgIcon={CoinIcon} stroke={stroke} />
      </Styled.CoinWrapper>
      <Styled.RightSection>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Styled.RightSection>
    </Styled.Wrapper>
  );
};

export default HeaderComponent;
