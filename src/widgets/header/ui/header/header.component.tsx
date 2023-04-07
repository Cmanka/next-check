import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { selectorIsAuth, useUserStore } from '@/entities/user';
import CoinIcon from '@/shared/assets/icons/coin.svg';
import { Icon } from '@/shared/ui/icon';

import { ExitIcon } from '../exit-icon';
import { LanguageSwitcher } from '../language-switcher';
import { LoginIcon } from '../login-icon';
import { ThemeSwitcher } from '../theme-switcher';
import * as Styled from './header.styles';

const HeaderComponent = () => {
  const {
    svg: { stroke },
  } = useContext(ThemeContext);
  const isAuth = useUserStore(selectorIsAuth);

  return (
    <Styled.Wrapper>
      <Styled.CoinWrapper>
        <Icon SvgIcon={CoinIcon} stroke={stroke} />
      </Styled.CoinWrapper>
      <Styled.RightSection>
        {!isAuth && <LoginIcon />}
        {isAuth && <ExitIcon />}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Styled.RightSection>
    </Styled.Wrapper>
  );
};

export default HeaderComponent;
