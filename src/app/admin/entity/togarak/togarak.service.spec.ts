import { TestBed } from '@angular/core/testing';

import { TogarakService } from './togarak.service';

describe('TogarakService', () => {
  let service: TogarakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogarakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
