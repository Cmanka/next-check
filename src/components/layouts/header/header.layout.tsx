import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Icon } from '@/components/ui/icon';
import CoinIcon from '@/shared/assets/coin.svg';
import LanguageIcon from '@/shared/assets/language.svg';
import ThemeIcon from '@/shared/assets/theme.svg';
import { AppLanguage } from '@/shared/constants/app-language.constant';

import * as Styled from './header.styles';

const HeaderLayout = () => {
  const {
    svg: { stroke, fill },
    toggleTheme,
  } = useContext(ThemeContext);
  const { locale, pathname, push } = useRouter();

  const handleChangeLanguage = () => {
    if (locale === AppLanguage.English) {
      push(pathname, pathname, { locale: AppLanguage.Russian });
    } else {
      push(pathname, pathname, { locale: AppLanguage.English });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.CoinWrapper>
        <Icon SvgIcon={CoinIcon} stroke={stroke} />
      </Styled.CoinWrapper>
      <Styled.RightSection>
        <Styled.RightItem onClick={handleChangeLanguage}>
          <Icon SvgIcon={LanguageIcon} fill={fill} />
        </Styled.RightItem>
        <Styled.RightItem onClick={toggleTheme}>
          <Icon SvgIcon={ThemeIcon} fill={fill} stroke={stroke} />
        </Styled.RightItem>
      </Styled.RightSection>
    </Styled.Wrapper>
  );
};

export default HeaderLayout;
