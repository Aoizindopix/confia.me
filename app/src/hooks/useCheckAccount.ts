import { useMutation } from '@tanstack/react-query';
import { AccountCheckerFactory } from '@factories/accountCheckerFactory';
import { HistoryEntry, DatingApp } from '@utils/types';
import { useHistoryStore } from '@stores/historyStore';
import { useCallback } from 'react';
import { nanoid } from 'nanoid/non-secure';

interface UseCheckAccountParams {
  onSuccess?: (entry: HistoryEntry) => void;
  onError?: (error: Error) => void;
}

export const useCheckAccount = ({ onSuccess, onError }: UseCheckAccountParams = {}) => {
  const addEntry = useHistoryStore((state) => state.addEntry);

  const mutation = useMutation({
    mutationFn: async ({ username, app }: { username: string; app: DatingApp }) => {
      const normalizedInput = username.trim();
      const checker = AccountCheckerFactory.create(app);
      const status = await checker.check(normalizedInput);
      const entry: HistoryEntry = {
        id: nanoid(),
        username: normalizedInput,
        app,
        status,
        timestamp: Date.now()
      };
      addEntry(entry);
      return entry;
    },
    onSuccess,
    onError
  });

  const checkAccount = useCallback(
    (username: string, app: DatingApp) => mutation.mutate({ username, app }),
    [mutation]
  );

  return {
    checkAccount,
    ...mutation
  };
};
