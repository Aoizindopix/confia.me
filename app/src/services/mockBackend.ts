import { DatingApp } from '@utils/types';

const mockDatabase: Record<DatingApp, Set<string>> = {
  tinder: new Set(['ana_92', 'carlos_joy', 'viagem_love']),
  bumble: new Set(['maria.connect', 'tech_joao']),
  badoo: new Set(['carolzinha', 'wanderlust']),
  eden: new Set(['faithful_heart', 'graceful_me']),
  salt: new Set(['lucasfaith', 'gabrielaworship']),
  quimicaCrista: new Set(['esperanca', 'luz_da_fe'])
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockCheckAccount = async (app: DatingApp, username: string) => {
  await delay(1200 + Math.random() * 900);
  const normalized = username.trim().toLowerCase();
  const isActive = mockDatabase[app].has(normalized);
  return (isActive ? 'Ativa' : 'Não encontrada') as const;
};
