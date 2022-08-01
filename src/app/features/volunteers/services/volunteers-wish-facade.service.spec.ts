import { TestBed } from '@angular/core/testing';

import { VolunteersWishFacadeService } from './volunteers-wish-facade.service';

describe('VolunteersFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteersWishFacadeService = TestBed.get(
      VolunteersWishFacadeService
    );
    expect(service).toBeTruthy();
  });
});
