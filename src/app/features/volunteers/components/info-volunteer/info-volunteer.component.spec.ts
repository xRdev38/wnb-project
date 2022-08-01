import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoVolunteerComponent } from './info-volunteer.component';

describe('InfoVolunteerComponent', () => {
  let component: InfoVolunteerComponent;
  let fixture: ComponentFixture<InfoVolunteerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
