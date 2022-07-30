import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityVolunteerComponent } from './identity-volunteer.component';

describe('IdentityVolunteerComponent', () => {
  let component: IdentityVolunteerComponent;
  let fixture: ComponentFixture<IdentityVolunteerComponent>;

  beforeEach(async(() => {
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
