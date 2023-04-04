import { PageWrapper } from "@/components/layouts/page-wrapper";

import * as Styled from './about.styles'

const AboutScreen = () => {
	return (
		<PageWrapper>
			<Styled.InnerWrapper>
				<Styled.Title>Cryptoportfolio</Styled.Title>
				<Styled.Description>Here you can do basic functionality, with your portfolio, add save,
					etc.</Styled.Description>
			</Styled.InnerWrapper>
		</PageWrapper>
	);
};

export default AboutScreen;
