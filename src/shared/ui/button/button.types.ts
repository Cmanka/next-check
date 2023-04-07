import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
}
