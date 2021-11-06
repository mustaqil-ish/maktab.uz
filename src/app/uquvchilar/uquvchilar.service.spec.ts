import { TestBed } from '@angular/core/testing';

import { UquvchilarService } from './uquvchilar.service';

describe('UquvchilarService', () => {
  let service: UquvchilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UquvchilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
