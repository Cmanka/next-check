import styled from 'styled-components';

import { Button as SharedButton } from '@/shared/ui/button';
import { Input as SharedInput } from '@/shared/ui/input';

export const Title = styled.h4`
  font-size: 24px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 20px;
`;

export const Input = styled(SharedInput)`
  margin-bottom: 24px;
`;

export const Button = styled(SharedButton)`
  width: 100%;
`;

export const Form = styled.form`
  padding: 40px 80px;
`;
