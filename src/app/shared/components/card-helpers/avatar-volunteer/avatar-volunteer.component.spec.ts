import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarVolunteerComponent } from './avatar-volunteer.component';

describe('AvatarVolunteerComponent', () => {
  let component: AvatarVolunteerComponent;
  let fixture: ComponentFixture<AvatarVolunteerComponent>;
  const avatarVm = {
    id: '1390',
    dateCreated: '2087-07-23T01:29:13.525Z',
    srcUrl: 'test.png',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarVolunteerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be no avatar if there is no data', () => {
    expect(component.avatar$.value).toEqual(null);
  });

  it('should be avatar if there is data', () => {
    component.avatar = avatarVm;
    expect(component.avatar$.value).toEqual(avatarVm);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
