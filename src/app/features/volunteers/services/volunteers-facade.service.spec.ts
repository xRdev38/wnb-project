import { TestBed } from '@angular/core/testing';

import { VolunteersFacadeService } from './volunteers-facade.service';

describe('VolunteersFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteersFacadeService = TestBed.get(VolunteersFacadeService);
    expect(service).toBeTruthy();
  });
});
