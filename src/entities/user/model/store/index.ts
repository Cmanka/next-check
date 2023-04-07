import create from 'zustand';

import { StorageKeys } from '@/shared/constants/storage-keys.constant';

import { type UserStoreState } from '../types/user-store.interface';

export const useUserStore = create<UserStoreState>()((set) => ({
  user: null,
  addUser: (user) => {
    set(() => ({
      user,
    }));
  },
  removeUser: () => {
    set(() => ({
      user: null,
    }));
    localStorage.removeItem(StorageKeys.User);
  },
}));
