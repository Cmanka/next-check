import { type PropsWithChildren } from 'react';

export interface WrapperProps extends PropsWithChildren {
  title: string;
  description?: string;
}
