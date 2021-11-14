import { TestBed } from '@angular/core/testing';

import { DarsService } from './dars.service';

describe('DarsService', () => {
  let service: DarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
