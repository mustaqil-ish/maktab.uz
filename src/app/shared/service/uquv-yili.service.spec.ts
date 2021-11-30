import { TestBed } from '@angular/core/testing';

import { UquvYiliService } from './uquv-yili.service';

describe('UquvYiliService', () => {
  let service: UquvYiliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UquvYiliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
