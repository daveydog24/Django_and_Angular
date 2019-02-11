import { TestBed } from '@angular/core/testing';

import { GithubBattleService } from './github-battle.service';

describe('GithubBattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubBattleService = TestBed.get(GithubBattleService);
    expect(service).toBeTruthy();
  });
});
