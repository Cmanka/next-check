import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import PortfolioIcon from '@/shared/assets/icons/portfolio.svg';
import { Routes } from '@/shared/constants/routes.constant';

import { type NavigationItem } from '../types/navigation-item.interface';

export const navigationList = (isShow: boolean): NavigationItem[] => [
  {
    label: 'home',
    href: Routes.Home,
    Svg: HomeIcon,
    isShow: true,
  },
  {
    label: 'portfolios',
    href: Routes.Portfolios,
    Svg: PortfolioIcon,
    isShow,
  },
  {
    label: 'about',
    href: Routes.About,
    Svg: AboutIcon,
    isShow: true,
  },
];
