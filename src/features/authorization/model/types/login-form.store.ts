import { type User } from '@/entities/user';

export interface LoginFormStore {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  updateUsername: (username: string) => void;
  updatePassword: (password: string) => void;
  handleSubmit: () => Promise<User>;
  clearState: () => void;
}
