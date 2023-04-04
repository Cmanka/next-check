import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import { sidebarData } from './sidebar.data';
import * as Styled from './sidebar.styles';

const SidebarLayout = () => {
  const { pathname } = useRouter();
  const { icons } = useTheme();

  return (
    <Styled.Wrapper>
      {sidebarData.map(({ label, href, icon }) => (
        <Styled.Link key={href} href={href} isActive={href === pathname}>
          <Image src={icons[icon]} alt={label} width={50} height={50} />
          {label}
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SidebarLayout;
