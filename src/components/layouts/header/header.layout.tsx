import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as Styled from './header.styles';

const HeaderLayout = () => {
  const {
    icons: { language, theme, coin },
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <Styled.Wrapper>
      <Styled.CoinWrapper>
        <Image src={coin} alt="coin" width={50} height={50} />
      </Styled.CoinWrapper>
      <Styled.RightSection>
        <Styled.RightItem>
          <Image src={language} alt="theme" width={50} height={50} />
        </Styled.RightItem>
        <Styled.RightItem onClick={toggleTheme}>
          <Image src={theme} alt="theme" width={50} height={50} />
        </Styled.RightItem>
      </Styled.RightSection>
    </Styled.Wrapper>
  );
};

export default HeaderLayout;
