import { api } from '@/shared/configs/api.config';

import { type LoginServiceResponse, type LoginServiceVariables } from '../types/login-service.interface';

export const login = async ({ username, password }: LoginServiceVariables) => {
  const { data } = await api.post<LoginServiceResponse>('/login', { username, password });

  return data;
};
