import { memo } from 'react';

import * as Styled from './input.styles';
import { type InputProps } from './input.types';

const InputComponent = ({ label, onChange, value, className, type = 'text', ...props }: InputProps) => {
  const overrideOnChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <Styled.Wrapper className={className}>
      {Boolean(label) && <span>{label}</span>}
      <Styled.Input onChange={overrideOnChange} value={value} type={type} {...props} />
    </Styled.Wrapper>
  );
};

export default memo(InputComponent);
