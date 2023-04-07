import { type UserStoreState } from '../types/user-store.interface';

export const selectorIsAuth = (state: UserStoreState) => Boolean(state.user);
