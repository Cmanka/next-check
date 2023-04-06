import { type Routes } from '@/shared/constants/routes.constant';

export interface NavigationItem {
  label: string;
  href: Routes;
  Svg: SVGElement;
}
