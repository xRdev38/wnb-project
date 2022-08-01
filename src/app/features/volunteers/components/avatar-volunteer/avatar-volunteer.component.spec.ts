import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarVolunteerComponent } from './avatar-volunteer.component';

describe('AvatarVolunteerComponent', () => {
  let component: AvatarVolunteerComponent;
  let fixture: ComponentFixture<AvatarVolunteerComponent>;
  const avatarVm = {
    id: '1390',
    dateCreated: '2087-07-23T01:29:13.525Z',
    srcUrl: '',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarVolunteerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarVolunteerComponent);
    component = fixture.componentInstance;
    component.avatar = avatarVm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
