import { BaseAccountService } from './baseAccountService';

export class SaltAccountService extends BaseAccountService {
  constructor() {
    super('salt');
  }
}
