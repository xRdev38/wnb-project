import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilterComponent } from './nav-filter.component';
import { WishStatus } from '@core/models';

describe('NavFilterComponent', () => {
  let component: NavFilterComponent;
  let fixture: ComponentFixture<NavFilterComponent>;
  const filters = [
    {
      className: 'btn-primary',
      status: WishStatus.Application,
      count: 20,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.filters = filters;
    expect(component).toBeTruthy();
  });
});
