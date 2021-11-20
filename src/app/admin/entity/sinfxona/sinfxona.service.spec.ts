import { TestBed } from '@angular/core/testing';

import { SinfxonaService } from './sinfxona.service';

describe('SinfxonaService', () => {
  let service: SinfxonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinfxonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
