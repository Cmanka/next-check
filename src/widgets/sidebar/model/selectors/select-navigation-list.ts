import { TFunction } from 'next-i18next';

import { type UserStoreState } from '@/entities/user/model/types/user-store.interface';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import PortfolioIcon from '@/shared/assets/icons/portfolio.svg';
import { Routes } from '@/shared/constants/routes.constant';

import { type NavigationItem } from '../types/navigation-item.interface';

export const selectNavigationList = (t: TFunction) => (state: UserStoreState) => {
  const navigationList: NavigationItem[] = [
    {
      label: t('sidebar.home'),
      href: Routes.Home,
      Svg: HomeIcon,
    },
    {
      label: t('sidebar.about'),
      href: Routes.About,
      Svg: AboutIcon,
    },
  ];

  if (state?.user) {
    return [
      ...navigationList,
      {
        label: t('sidebar.portfolios'),
        href: Routes.Portfolios,
        Svg: PortfolioIcon,
      },
    ];
  }

  return navigationList;
};
