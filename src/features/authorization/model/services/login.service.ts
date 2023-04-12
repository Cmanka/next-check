import { api } from '@/shared/configs/api.config';

import { LoginServiceResponse, LoginServiceVariables } from '../types/login-service.interface';

export const login = async ({ username, password }: LoginServiceVariables) => {
  const { data } = await api.post<unknown, LoginServiceResponse>('/login', { username, password });

  return data;
};
