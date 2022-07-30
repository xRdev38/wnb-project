import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarVolunteerComponent } from './avatar-volunteer.component';

describe('AvatarVolunteerComponent', () => {
  let component: AvatarVolunteerComponent;
  let fixture: ComponentFixture<AvatarVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
