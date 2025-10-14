import { HistoryEntry } from '@utils/types';

type ResultParams = {
  entry: HistoryEntry;
};

export type RootStackParamList = {
  Onboarding: undefined;
  CheckAccount: undefined;
  Result: ResultParams;
  History: undefined;
};
