import { TestBed } from '@angular/core/testing';

import { VolunteersContainerService } from './volunteers-container.service';

describe('VolunteersContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteersContainerService = TestBed.get(VolunteersContainerService);
    expect(service).toBeTruthy();
  });
});
