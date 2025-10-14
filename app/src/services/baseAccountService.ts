import { IAccountChecker } from '@utils/types';
import { mockCheckAccount } from './mockBackend';
import { DatingApp } from '@utils/types';

export class BaseAccountService implements IAccountChecker {
  constructor(private readonly app: DatingApp) {}

  async check(username: string) {
    return mockCheckAccount(this.app, username);
  }
}
