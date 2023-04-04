import Image from "next/image";

import coinIcon from '@/assets/coin.svg'
import languageIcon from '@/assets/language.svg'
import themeIcon from '@/assets/theme.svg'

import * as Styled from './header.styles'

const HeaderLayout = () => {
	return (
		<Styled.Wrapper>
			<Styled.CoinWrapper>
				<Image src={coinIcon} alt='coin' width={50} height={50}/>
			</Styled.CoinWrapper>
			<Styled.RightSection>
				<Styled.RightItem>
					<Image src={languageIcon} alt='theme' width={50} height={50}/>
				</Styled.RightItem>
				<Styled.RightItem>
					<Image src={themeIcon} alt='theme' width={50} height={50}/>
				</Styled.RightItem>
			</Styled.RightSection>
		</Styled.Wrapper>
	);
};

export default HeaderLayout;
