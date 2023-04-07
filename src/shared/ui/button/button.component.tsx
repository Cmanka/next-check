import { memo } from 'react';

import * as Styled from './button.styles';
import { type ButtonProps } from './button.types';

const ButtonComponent = ({ label, ...props }: ButtonProps) => {
  return <Styled.Button {...props}>{label}</Styled.Button>;
};

export default memo(ButtonComponent);
