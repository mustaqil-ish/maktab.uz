import { TestBed } from '@angular/core/testing';

import { UserRouteAccessGuard } from './user-route-access.guard';

describe('UserRouteAccessService', () => {
  let service: UserRouteAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouteAccessGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
