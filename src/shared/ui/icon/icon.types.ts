import { type SVGProps, type VFC } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  SvgIcon: VFC<SVGProps<SVGSVGElement>>;
}
