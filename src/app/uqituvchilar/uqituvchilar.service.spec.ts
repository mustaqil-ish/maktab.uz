import { TestBed } from '@angular/core/testing';

import { UqituvchilarService } from './uqituvchilar.service';

describe('UqituvchilarService', () => {
  let service: UqituvchilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UqituvchilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
