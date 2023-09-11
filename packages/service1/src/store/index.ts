import { create } from 'zustand';
import { createTokenSlice } from './token';
import { createUserSlice } from './user';
import { persist } from 'zustand/middleware';

export const useBoundStore = create<GlobalState>()(
  persist(
    (...state) => ({
      ...createTokenSlice(...state),
      ...createUserSlice(...state),
    }),
    {
      name: 'gdev219',
      partialize: (state) => {
        return { tokens: state.tokens };
      },
    },
  ),
);
