import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListVolunteerComponent } from './list-volunteer.component';

describe('ListVolunteerComponent', () => {
  let component: ListVolunteerComponent;
  let fixture: ComponentFixture<ListVolunteerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
