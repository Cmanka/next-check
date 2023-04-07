import { type User } from '@/entities/user';

export interface LoginServiceVariables {
  username: string;
  password: string;
}

export interface LoginServiceResponse {
  data: User;
}
