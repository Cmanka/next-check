import { type User } from './user.interface';

export interface UserStoreState {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
}
