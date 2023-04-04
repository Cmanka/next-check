import { memo } from 'react';

import * as Styled from './button-link.styles';
import { type ButtonLinkProps } from './button-link.types';

const ButtonLinkComponent = ({ className, label, href }: ButtonLinkProps) => {
  return (
    <Styled.Link href={href} className={className}>
      {label}
    </Styled.Link>
  );
};

export default memo(ButtonLinkComponent);
