import { useMemo } from 'react';

import { selectorIsAuth, useUserStore } from '@/entities/user';

import { navigationList } from '../../model/data/navigation-list.data';
import { NavigationItem } from '../navigation-item';
import * as Styled from './list.styles';

const ListComponent = () => {
  const isAuth = useUserStore(selectorIsAuth);
  const navigations = useMemo(
    () =>
      navigationList(isAuth)
        .filter(({ isShow }) => isShow)
        .map((item) => <NavigationItem key={item.href} item={item} />),
    [isAuth],
  );

  return <Styled.Wrapper>{navigations}</Styled.Wrapper>;
};

export default ListComponent;
