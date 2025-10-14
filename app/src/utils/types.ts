export type AccountStatus = 'Ativa' | 'Não encontrada' | 'Active' | 'Not found';

export interface HistoryEntry {
  id: string;
  username: string;
  app: DatingApp;
  status: AccountStatus;
  timestamp: number;
}

export type DatingApp =
  | 'tinder'
  | 'bumble'
  | 'badoo'
  | 'eden'
  | 'salt'
  | 'quimicaCrista';

export interface IAccountChecker {
  check: (username: string) => Promise<'Ativa' | 'Não encontrada'>;
}
