import { type PropsWithChildren } from 'react';

export interface SeoProps extends PropsWithChildren {
  title: string;
  description?: string;
}
