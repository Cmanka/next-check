import { useState } from 'react';
import { useTheme } from 'styled-components';

import { LoginModal } from '@/features/authorization';
import LoginIcon from '@/shared/assets/icons/login.svg';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './login-icon.styles';

const LoginIconComponent = () => {
  const {
    svg: { fill },
  } = useTheme();
  const [loginModal, setLoginModal] = useState(false);

  const handleCloseLoginModal = () => {
    setLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setLoginModal(true);
  };

  return (
    <>
      <Styled.Wrapper onClick={handleOpenLoginModal}>
        <Icon SvgIcon={LoginIcon} fill={fill} />
      </Styled.Wrapper>
      <LoginModal open={loginModal} onClose={handleCloseLoginModal} />
    </>
  );
};

export default LoginIconComponent;
