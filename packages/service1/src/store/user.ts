import { StateCreator } from 'zustand';

export const createUserSlice: StateCreator<GlobalState, [], [], UserSlice> = (set, get) => ({
  user: {
    id: '',
  },
  updateUser: () => set((state) => ({ user: state.user })),
  getIsLoggedIn: () => {
    const user = get().user;
    return !!Object.keys(user);
  },
});
