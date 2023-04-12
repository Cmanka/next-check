import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { selectorIsAuth, useUserStore } from '@/entities/user';
import { Routes } from '@/shared/constants/routes.constant';

export const withAuth =
  <T extends {}>(Page: NextPage<T>) =>
  (props: T) => {
    const router = useRouter();
    const isAuth = useUserStore(selectorIsAuth);

    useEffect(() => {
      if (!isAuth) {
        router.replace(Routes.Home);
      }
    }, [isAuth, router]);

    return <Page {...props} />;
  };
