import AboutIcon from '@/shared/assets/about.svg';
import HomeIcon from '@/shared/assets/home.svg';
import PortfolioIcon from '@/shared/assets/portfolio.svg';
import { Routes } from '@/shared/constants/routes.constant';

export const sidebarData = [
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
