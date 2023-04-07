import { type User } from './user.interface';

export interface UserStoreState {
  user: User;
  addUser: (user: User) => void;
  removeUser: () => void;
}
