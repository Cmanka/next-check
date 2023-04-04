import Image from "next/image";

import { sidebarData } from './sidebar.data'
import * as Styled from './sidebar.styles'

const SidebarLayout = () => {
	return (
		<Styled.Wrapper>
			{sidebarData.map(({ label, href, icon }) =>
				<Styled.Link key={href} href={href}>
					<Image src={icon} alt={label} width={50} height={50}/>
					{label}
				</Styled.Link>
			)}
		</Styled.Wrapper>
	);
};

export default SidebarLayout;
