import Image from 'next/image';
import { useRouter } from 'next/router';

import { sidebarData } from './sidebar.data';
import * as Styled from './sidebar.styles';

const SidebarLayout = () => {
  const { pathname } = useRouter();

  return (
    <Styled.Wrapper>
      {sidebarData.map(({ label, href, icon }) => (
        <Styled.Link key={href} href={href} isActive={href === pathname}>
          <Image src={icon} alt={label} width={50} height={50} />
          {label}
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SidebarLayout;
