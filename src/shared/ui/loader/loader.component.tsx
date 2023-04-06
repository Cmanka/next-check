import { memo } from 'react';

import * as Styled from './loader.styles';
import { type LoaderProps } from './loader.types';

const LoaderComponent = ({ className }: LoaderProps) => {
  return <Styled.Spinner className={className} />;
};

export default memo(LoaderComponent);
