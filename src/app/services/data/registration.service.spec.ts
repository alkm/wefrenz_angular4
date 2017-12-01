import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './registration.service';

describe('RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([RegistrationService], (service: RegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
