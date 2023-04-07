import { memo } from 'react';

import { Modal } from '@/shared/ui/modal';

import { LoginForm } from '../login-form';
import * as Styled from './login-modal.styles';
import { type LoginModalProps } from './login-modal.types';

const LoginModalComponent = ({ open, onClose }: LoginModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Styled.Title>Login</Styled.Title>
      <LoginForm onClose={onClose} />
    </Modal>
  );
};

export default memo(LoginModalComponent);
