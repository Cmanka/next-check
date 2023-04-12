import { type PropsWithChildren } from 'react';

export interface PortalProps extends PropsWithChildren {
  element?: Element | DocumentFragment;
}
