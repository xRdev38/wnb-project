import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVolunteerComponent } from './info-volunteer.component';

describe('InfoVolunteerComponent', () => {
  let component: InfoVolunteerComponent;
  let fixture: ComponentFixture<InfoVolunteerComponent>;

  beforeEach(async(() => {
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
