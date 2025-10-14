import { DatingApp, IAccountChecker } from '@utils/types';
import { TinderAccountService } from '@services/tinderAccountService';
import { BumbleAccountService } from '@services/bumbleAccountService';
import { BadooAccountService } from '@services/badooAccountService';
import { EdenAccountService } from '@services/edenAccountService';
import { SaltAccountService } from '@services/saltAccountService';
import { QuimicaCristaAccountService } from '@services/quimicaCristaAccountService';

class AccountCheckerFactory {
  private static instances = new Map<DatingApp, IAccountChecker>();

  static create(app: DatingApp): IAccountChecker {
    if (!this.instances.has(app)) {
      this.instances.set(app, this.buildService(app));
    }
    return this.instances.get(app)!;
  }

  private static buildService(app: DatingApp): IAccountChecker {
    switch (app) {
      case 'tinder':
        return new TinderAccountService();
      case 'bumble':
        return new BumbleAccountService();
      case 'badoo':
        return new BadooAccountService();
      case 'eden':
        return new EdenAccountService();
      case 'salt':
        return new SaltAccountService();
      case 'quimicaCrista':
        return new QuimicaCristaAccountService();
      default:
        return new TinderAccountService();
    }
  }
}

export { AccountCheckerFactory };
