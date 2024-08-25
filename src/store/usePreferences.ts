import { create } from 'zustand';

type Prefernces = {
    soundEnabled: boolean;
    setSoundEnabled: (soundEnabled: boolean) => void;
};

export const usePreferences = create<Prefernces>((set) => ({
    soundEnabled: true,
    setSoundEnabled: (soundEnabled: boolean) => set({ soundEnabled }),
}));