import { Portal } from '@/shared/ui/portal';

import * as Styled from './modal.styles';
import { type ModalProps } from './modal.types';

const ModalComponent = ({ className, open, onClose, children }: ModalProps) => {
  const onClickContent = (e) => {
    e.stopPropagation();
  };

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Styled.Wrapper className={className}>
        <Styled.Overlay onClick={onClose}>
          <Styled.Content onClick={onClickContent}>{children}</Styled.Content>
        </Styled.Overlay>
      </Styled.Wrapper>
    </Portal>
  );
};

export default ModalComponent;
