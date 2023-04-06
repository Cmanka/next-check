import { memo } from 'react';

import * as Styled from './input.styles';
import { type InputProps } from './input.types';

const InputComponent = ({ label, className }: InputProps) => {
  return (
    <Styled.Wrapper className={className}>
      {Boolean(label) && <span>{label}</span>}
      <Styled.Input type="text" />
    </Styled.Wrapper>
  );
};

export default memo(InputComponent);
