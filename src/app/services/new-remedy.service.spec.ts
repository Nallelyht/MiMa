import { TestBed, inject } from '@angular/core/testing';

import { NewRemedyService } from './new-remedy.service';

describe('NewRemedyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewRemedyService]
    });
  });

  it('should be created', inject([NewRemedyService], (service: NewRemedyService) => {
    expect(service).toBeTruthy();
  }));
});
