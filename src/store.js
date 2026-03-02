import { create } from 'zustand';

export const useStore = create((set) => ({
    activeSection: 'intro',
    setActiveSection: (section) => set({ activeSection: section }),

    // scrollTargetPage: null = no scroll, 0=hero, 1=toolkit, 2=contacts
    scrollTargetPage: null,
    scrollToPage: (page) => set({ scrollTargetPage: page }),
    clearScrollTarget: () => set({ scrollTargetPage: null }),
}));
