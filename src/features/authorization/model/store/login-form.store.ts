import { create } from 'zustand';

import { login } from '../services/login.service';
import { type LoginFormStore } from '../types/login-form.store';

const initialState = {
  username: '',
  password: '',
  error: '',
  loading: false,
};

export const useLoginFormStore = create<LoginFormStore>()((set, get) => ({
  ...initialState,
  clearState: () => {
    set(() => ({
      ...initialState,
    }));
  },
  updateUsername: (username) => {
    set(() => ({
      username,
    }));
  },
  updatePassword: (password) => {
    set(() => ({
      password,
    }));
  },
  handleSubmit: async () => {
    set(() => ({ loading: true }));
    const username = get().username;
    const password = get().password;
    return await login({ password, username })
      .then((user) => user)
      .catch((error) => {
        set(() => ({ error: error.response.data.message }));
      })
      .finally(() => {
        set(() => ({ loading: false }));
      });
  },
}));
