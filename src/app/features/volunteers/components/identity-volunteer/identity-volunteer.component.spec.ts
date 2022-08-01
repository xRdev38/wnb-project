import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IdentityVolunteerComponent } from './identity-volunteer.component';

describe('IdentityVolunteerComponent', () => {
  let component: IdentityVolunteerComponent;
  let fixture: ComponentFixture<IdentityVolunteerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
