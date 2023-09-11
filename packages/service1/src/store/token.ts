import { StateCreator } from 'zustand';

export const createTokenSlice: StateCreator<GlobalState, [], [], TokenSlice> = (set) => ({
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
  updateAccessToken: () => set((state) => ({ tokens: { accessToken: state.tokens.accessToken } })),
  updateRefreshToken: () => set((state) => ({ tokens: { refreshToken: state.tokens.refreshToken } })),
  updateTokens: (tokens) => set(() => ({ tokens })),
  removeTokens: () =>
    set(() => ({
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
    })),
});
