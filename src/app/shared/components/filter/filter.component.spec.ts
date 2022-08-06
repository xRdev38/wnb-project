import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { WishStatus } from '@core/models';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const filterDataMock = {
    status: WishStatus.InProgress,
  };
  let statusBtn: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be no filterData if there is no data', () => {
    expect(component.filterData$.value).toEqual(null);
  });

  it('should be filterData if there is data', fakeAsync(() => {
    component.filter = filterDataMock;
    fixture.detectChanges();
    tick(200);
    expect(component.filterData$.value).toEqual(filterDataMock);
  }));

  it('should be emitted status', fakeAsync(() => {
    const spy = spyOn(component.status, 'emit');
    component.filter = filterDataMock;
    fixture.detectChanges();
    statusBtn = fixture.debugElement.query(By.css('.btn'));
    statusBtn.triggerEventHandler('click', null);
    tick(100);
    expect(spy).toHaveBeenCalled();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
