import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'onChange'> {
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}
