import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-mock-test',
  template: `
    <app-card>
      <div card-body-left>I'm the Left</div>
      <span card-body-right>I'm the right</span>
    </app-card>
  `,
})
class MockTestCardComponent {}

describe('CardComponent', () => {
  let component: MockTestCardComponent;
  let fixture: ComponentFixture<MockTestCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, MockTestCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should correctly project the right content', () => {
    expect(
      fixture.debugElement.query(By.css('app-card')).query(By.css('span'))
        .nativeElement.innerHTML
    ).toContain('I\'m the right');
  });

  it('should correctly project the left content', () => {
    expect(
      fixture.debugElement.query(By.css('app-card')).query(By.css('div'))
        .nativeElement.innerHTML
    ).toContain('I\'m the Left');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
