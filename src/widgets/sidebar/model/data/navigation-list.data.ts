import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import PortfolioIcon from '@/shared/assets/icons/portfolio.svg';
import { Routes } from '@/shared/constants/routes.constant';

import { type NavigationItem } from '../types/navigation-item.interface';

export const navigationList: NavigationItem[] = [
  {
    label: 'home',
    href: Routes.Home,
    Svg: HomeIcon,
  },
  {
    label: 'portfolios',
    href: Routes.Portfolios,
    Svg: PortfolioIcon,
  },
  {
    label: 'about',
    href: Routes.About,
    Svg: AboutIcon,
  },
];
