import { TestBed } from '@angular/core/testing';

import { SignupCommandsService } from './signup-commands.service';

describe('SignupCommandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupCommandsService = TestBed.get(SignupCommandsService);
    expect(service).toBeTruthy();
  });
});
