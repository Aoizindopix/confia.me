import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryEntry } from '@utils/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HistoryState {
  entries: HistoryEntry[];
  addEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: (entry) => set({ entries: [entry, ...get().entries] }),
      clearHistory: () => set({ entries: [] })
    }),
    {
      name: 'confia-history',
      getStorage: () => AsyncStorage
    }
  )
);
