import { TestBed } from '@angular/core/testing';

import { BeingDonatedService } from './being-donated.service';

describe('BeingDonatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeingDonatedService = TestBed.get(BeingDonatedService);
    expect(service).toBeTruthy();
  });
});
