import { useRouter } from 'next/router';
import React, { type PropsWithChildren, useEffect, useState } from 'react';

import * as Styled from './loader.styles';

const LoaderComponent = ({ children }: PropsWithChildren) => {
  const { events } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleComplete);
    events.on('routeChangeError', handleComplete);

    return () => {
      events.off('routeChangeStart', handleStart);
      events.off('routeChangeComplete', handleComplete);
      events.off('routeChangeError', handleComplete);
    };
  }, [events]);

  if (loading) {
    return <Styled.Spinner />;
  }

  return <>{children}</>;
};

export default LoaderComponent;
