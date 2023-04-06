import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
  label?: string;
  className?: string;
}
