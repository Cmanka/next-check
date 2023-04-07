import { type PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  className?: string;
}
