import { type PropsWithChildren, useEffect } from 'react';

import { useUserStore } from '@/entities/user';
import { StorageKeys } from '@/shared/constants/storage-keys.constant';

const UserInitComponent = ({ children }: PropsWithChildren) => {
  const initUser = useUserStore((state) => state.addUser);

  useEffect(() => {
    const userKey = localStorage.getItem(StorageKeys.User);
    if (userKey) {
      initUser(JSON.parse(userKey));
    }
  }, [initUser]);

  return <>{children}</>;
};

export default UserInitComponent;
