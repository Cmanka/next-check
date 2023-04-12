import { type SVGProps, type VFC } from 'react';

import { type Routes } from '@/shared/constants/routes.constant';

export interface NavigationItem {
  label: string;
  href: Routes;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}
