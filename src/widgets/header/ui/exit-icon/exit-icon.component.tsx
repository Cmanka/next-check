import { useTheme } from 'styled-components';

import { useUserStore } from '@/entities/user';
import ExitIcon from '@/shared/assets/icons/exit.svg';
import { Icon } from '@/shared/ui/icon';

import * as Styled from './exit-icon.styles';

const ExitIconComponent = () => {
  const {
    svg: { fill },
  } = useTheme();
  const { removeUser } = useUserStore();

  const handleLogout = () => {
    removeUser();
  };

  return (
    <Styled.Wrapper onClick={handleLogout}>
      <Icon SvgIcon={ExitIcon} fill={fill} />
    </Styled.Wrapper>
  );
};

export default ExitIconComponent;
