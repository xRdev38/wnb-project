import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { IdentityVolunteerComponent } from './identity-volunteer.component';

describe('IdentityVolunteerComponent', () => {
  let component: IdentityVolunteerComponent;
  let fixture: ComponentFixture<IdentityVolunteerComponent>;
  const identityMock = {
    firstname: 'Logan',
    lastname: 'Unknown',
    city: 'Grenoble',
    company: {
      name: 'Renault',
    },
    title: 'Mission01',
    coordinator: {
      firstname: 'Paul',
      lastname: 'Martin',
    },
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityVolunteerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be no profileName if there is no data', () => {
    expect(component.profileName$.value).toEqual(null);
  });

  it('should be no coordinatorName if there is no data', () => {
    expect(component.coordinatorName$.value).toEqual(null);
  });

  it('should be no city if there is no data', () => {
    expect(component.city$.value).toEqual(null);
  });

  it('should be no title if there is no data', () => {
    expect(component.title$.value).toEqual(null);
  });

  it('should be profileName if there is data', fakeAsync(() => {
    component.identity = identityMock;
    fixture.detectChanges();
    tick(200);
    expect(component.profileName$.value).toEqual(
      `${identityMock.firstname} ${identityMock.lastname}`
    );
  }));

  it('should be coordinatorName if there is data', fakeAsync(() => {
    component.identity = identityMock;
    fixture.detectChanges();
    tick(200);
    expect(component.coordinatorName$.value).toEqual(
      `${identityMock.coordinator.firstname} ${identityMock.coordinator.lastname}`
    );
  }));

  it('should be city if there is data', fakeAsync(() => {
    component.identity = identityMock;
    fixture.detectChanges();
    tick(200);
    expect(component.city$.value).toEqual(`${identityMock.city}`);
  }));

  it('should be title if there is data', fakeAsync(() => {
    component.identity = identityMock;
    fixture.detectChanges();
    tick(200);
    expect(component.title$.value).toEqual(`${identityMock.title}`);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
