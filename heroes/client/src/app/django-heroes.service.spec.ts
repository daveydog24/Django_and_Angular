import { TestBed } from '@angular/core/testing';

import { DjangoHeroesService } from './django-heroes.service';

describe('DjangoHeroesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjangoHeroesService = TestBed.get(DjangoHeroesService);
    expect(service).toBeTruthy();
  });
});
