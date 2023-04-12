import { useTranslation } from 'next-i18next';

import { useUserStore } from '@/entities/user';

import { selectNavigationList } from '../../model/selectors/select-navigation-list';
import { NavigationItem } from '../navigation-item';
import * as Styled from './list.styles';

const ListComponent = () => {
  const { t } = useTranslation('common');
  const navigationList = useUserStore(selectNavigationList(t));

  return (
    <Styled.Wrapper>
      {navigationList.map((item) => (
        <NavigationItem key={item.href} item={item} />
      ))}
    </Styled.Wrapper>
  );
};

export default ListComponent;
