import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersContainerComponent } from './volunteers-container.component';

describe('VolunteersContainerComponent', () => {
  let component: VolunteersContainerComponent;
  let fixture: ComponentFixture<VolunteersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
