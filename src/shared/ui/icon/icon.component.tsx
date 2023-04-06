import { memo } from 'react';

import { type IconProps } from './icon.types';

const IconComponent = ({ SvgIcon, ...props }: IconProps) => {
  return <SvgIcon {...props} />;
};

export default memo(IconComponent);
