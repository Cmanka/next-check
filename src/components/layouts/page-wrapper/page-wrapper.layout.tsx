import { type PropsWithChildren } from "react";

import { Header } from "../header";
import { Sidebar } from '../sidebar'
import * as Styled from './page-wrapper.styles'

const PageWrapperLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header/>
			<Styled.Wrapper>
				<Sidebar/>
				<Styled.Container>{children}</Styled.Container>
			</Styled.Wrapper>
		</>
	);
};

export default PageWrapperLayout;
