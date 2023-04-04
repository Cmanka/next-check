import { type PropsWithChildren } from 'react';

export interface PageWrapperProps extends PropsWithChildren {
  title: string;
  description?: string;
}
