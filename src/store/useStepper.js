import { create } from 'zustand';

export const useStepper = create((set) => ({
  step: 0,
  back: () => set((state) => ({ step: state.step >= 1 ? state.step - 1 : state.step })),
  next: () => set((state) => ({ step: state.step <= 2 ? state.step + 1 : state.step })),
}));