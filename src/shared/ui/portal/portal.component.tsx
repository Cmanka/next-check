import { createPortal } from 'react-dom';

import { type PortalProps } from './portal.types';

const PortalComponent = ({ children, element = document.body }: PortalProps) => {
  return createPortal(children, element);
};

export default PortalComponent;
