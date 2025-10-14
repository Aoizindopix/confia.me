import { useHistoryStore } from '@stores/historyStore';

export const useHistory = () => {
  const entries = useHistoryStore((state) => state.entries);
  const clearHistory = useHistoryStore((state) => state.clearHistory);

  return { entries, clearHistory };
};
