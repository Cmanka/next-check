import styled from 'styled-components';

import { Button as SharedButton } from '@/shared/ui/button';
import { Input as SharedInput } from '@/shared/ui/input';

export const Input = styled(SharedInput)`
  margin-bottom: 24px;
`;

export const Button = styled(SharedButton)`
  width: 100%;
`;

export const Form = styled.form``;

export const Error = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.error};
`;
